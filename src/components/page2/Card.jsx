import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard({title, description, href, src}) {
  return (
    <Card className='group block ' sx={{ minWidth: 210, maxWidth:280,
      }} >
      <CardContent className=' bg-white hover:bg-[#7F56D9;] rounded-xl'>
        <div className='flex justify-start'>
        <img className='max-w-7 max-h-7 mr-3' src={src} alt='fv'/>
      
        <Typography  component="div" className='text-black group-hover:text-white text-lg font-bold'>
          {title}
        </Typography>
        </div>
        <Typography variant="body2" className='text-black pt-4 group-hover:text-white'>
         {description}
          <br />
         
        </Typography>
        <div className=' pt-3'>
        <a className='text-[#7F56D9;] group-hover:text-white ' href={href}>Learn More</a>
        </div>
      </CardContent>
      
    </Card>
  );
}