import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  return (
    <div style={{ paddingLeft:300, alignItems:'center', width:'100%',justifyContent:'center'}}>
    <Stack direction="row" spacing={2}>
      <Avatar
        src="../assets/sundar.jpg"
        sx={{ width: 224, height: 224 }}
      />
    </Stack>
    </div>
  );
}