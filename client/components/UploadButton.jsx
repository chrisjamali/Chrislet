import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';
const props = {
  action: '/api/addphoto',
  listType: 'picture',

  previewFile(file) {
    console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

    return fetch('/addphoto', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => {
          console.log(thumbnail)
         return  thumbnail
          
        });
  },
};

const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);

export default App;
