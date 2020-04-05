import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 130, color: '#365DF0' }} spin />
);

export default function Loading() {
  return <Spin indicator={antIcon} />;
}
