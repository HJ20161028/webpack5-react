import { Button, Modal, Input, Select, message } from 'antd';
import React, { useState } from 'react';
import './editForm.css';

const EditForm = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, updateData] = useState({
    name: 'Jin',
    age: 20,
    country: 'China',
  });
  const handleValueChange = (propery, value) => {
    const reg = /^-?\d*$/;
    if (propery === 'age') {
      if (reg.test(value) || value === '') {
        data[propery] = value;
        updateData({ ...data });
      }
    } else {
      data[propery] = value;
      updateData({ ...data });
    }
  }
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    message.success('Submitting data... View the latest data in the browser Console.');
    console.log("New data is:", data);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className='edit-entry' type="primary" onClick={showModal}>
        Open Edit Form
      </Button>
      <Modal
        open={open}
        title="Edit"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="cancel"
            type="primary"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
        ]}
      >
        <div className="form-item">
          <div className="title">
            Name:
          </div>
          <div className="input-wrap">
            <Input placeholder="Name" value={data['name']} onChange={(e) => handleValueChange('name', e.target.value)} />
          </div>
        </div>
        <div className="form-item">
          <div className="title">
            Age:
          </div>
          <div className="input-wrap">
            <Input placeholder="Age" value={data['age']} onChange={(e) => handleValueChange('age', e.target.value)} />
          </div>
        </div>
        <div className="form-item">
          <div className="title">
            Country:
          </div>
          <div className="input-wrap">
            <Select
              value={data['country']}
              style={{
                width: 472,
              }}
              onChange={(v) => handleValueChange('country', v)}
              options={[
                {
                  value: 'China',
                  label: 'China',
                },
                {
                  value: 'Rassia',
                  label: 'Rassia',
                },
              ]}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default EditForm;