import React from "react";
import { Box } from "@mui/material";
import {IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
const ImageList = ({ images,removeImage,enableEditing=true }) => {
  const itemCount = images.length;
  const containerWidth = '95%'; // Set the fixed width for the container, change as needed
  let columns = 1;
  let rows = 1;

  if (itemCount === 2) {
    columns = 2;
  } else if (itemCount === 4) {
    columns = 2;
    rows = 2;
  } else if (itemCount === 3) {
    columns = 2;
    rows = 2;
  }

  return (
    <Box sx={{ width: containerWidth,padding:'20px'  }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} >
        {images.slice(0, 4).map((image, index) => (
          <Box
            key={index}
            gridColumn={`span ${12 / columns}`}
            gridRow={`span ${12 / rows}`}
            style={{
              height: index === 1 && images.length === 3 ? "200%" : "100%" ,maxHeight:'380px'
            }}
          >
            {image && (<>
              {enableEditing&&<IconButton
                  style={{
                    position: "relative", // Position the remove button absolutely
                    top: 0, // Align the button to the top
                    left: '95%', // Align the button to the right
                    padding: "0px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                    cursor: "pointer",
                   
                    
                  }}
                  onClick={() => removeImage(index)} // Add a function to handle image removal
                >
                  <CloseIcon style={{height: '15px',
                    width:'20px'}}/>
                </IconButton>}
              <img
                src={image}
                style={{ position:"relative",width: "100%", height: "100%", objectFit: "cover" }}
              />
            
            </>)
            }
            
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageList;
