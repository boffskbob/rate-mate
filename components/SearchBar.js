import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Find a professor"
      value={inputValue}
      onChange={handleInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: "300px",
        borderRadius: 10,
        backgroundColor: '#f0f0f0',  
        input: { color: '#333' },   
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#ccc',   
            borderRadius: 10,
          }
        },
      }}
    />
  );
};

export default SearchBar;
