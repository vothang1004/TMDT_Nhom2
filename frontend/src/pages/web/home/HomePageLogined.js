import React, { useEffect, useState } from 'react';
import './Home.scss';
import WebLayout from '~/components/layouts/WebLayout';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { useNavigate, useParams } from 'react-router-dom';
import MenuFile from '~/components/file/MenuFile';
import { useSelector } from 'react-redux';

function HomePageLogined() {
  const { id: idFile } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth.login);
  const [anchorMenuFile, setAnchorMenuFile] = useState(null);
  const handleDbClickFile = (file) => {
    navigate(`/file/${file.id}`);
  };
  const handleShowMenuFile = (e) => {
    e.preventDefault();
    setAnchorMenuFile(e.target);
  };
  const handleCloseMenuFile = () => {
    setAnchorMenuFile(null);
  };
  useEffect(() => {
    // call api
    console.log('id file => ', idFile);
    if (!currentUser?.token) {
      navigate('/');
    }
  }, [currentUser?.token, idFile, navigate]);
  return (
    <>
      {!!anchorMenuFile && (
        <MenuFile open={!!anchorMenuFile} anchorEl={anchorMenuFile} handleClose={handleCloseMenuFile} />
      )}
      <WebLayout>
        <Box sx={{ backgroundColor: '#f2f3f7' }}>
          <Container className="home" sx={{ maxHeight: 'calc(100vh - 80px)' }} maxWidth="xl">
            <Stack
              sx={{ padding: '30px 0', height: '100px' }}
              spacing={2}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <FormControl size="small" sx={{ width: '300px', backgroundColor: '#fff' }}>
                <InputLabel id="demo-simple-select-label">Lọc file</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Lọc file">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{ height: '100%', backgroundColor: '#cd1417', '&:hover': { backgroundColor: '#cd1417' } }}
                variant="contained"
                startIcon={<AddOutlinedIcon />}
              >
                Mới
              </Button>
            </Stack>
            <Divider />
            <Box sx={{ height: 'calc(100vh - 181px)', overflow: 'auto' }} className="table-file custome-scrolly">
              <Grid className="table-file__row" padding="14px 10px" sx={{}} container>
                <Grid item md={4}>
                  <Stack direction="row" alignItems="center">
                    <Typography sx={{ fontWeight: 600 }} variant="body1">
                      Tên
                    </Typography>
                    <ArrowDropDownOutlinedIcon fontSize="small" />
                  </Stack>
                </Grid>
                <Grid item md={2}>
                  <Typography sx={{ fontWeight: 600 }} variant="body1">
                    Kích thước
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography sx={{ fontWeight: 600 }} variant="body1">
                    Cập nhật
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography sx={{ fontWeight: 600 }} variant="body1">
                    Lượt tải
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                onContextMenu={handleShowMenuFile}
                onDoubleClick={() => handleDbClickFile({ id: '123', parent: null, isFile: false })}
                className="table-file__row"
                padding="14px 10px"
                sx={{
                  cursor: 'pointer',
                  '&:active': {
                    backgroundColor: '#ccc',
                  },
                }}
                container
              >
                <Grid item md={4}>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <FolderIcon sx={{ color: '#f9c943' }} />
                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                      Music
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={2}>
                  <Typography sx={{ fontSize: '14px' }} variant="body1">
                    125KB
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography sx={{ fontSize: '14px' }} variant="body1">
                    _
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography sx={{ fontSize: '14px' }} variant="body1">
                    _
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                onDoubleClick={() => handleDbClickFile({ id: '456', parent: null, isFile: true })}
                className="table-file__row"
                padding="14px 10px"
                sx={{
                  cursor: 'pointer',
                  '&:active': {
                    backgroundColor: '#ccc',
                  },
                }}
                container
              >
                <Grid item md={4}>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Box sx={{ width: '16px', height: '16px' }}>
                      <FileIcon extension="docx" {...defaultStyles.docx} />
                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                      chinhsach.docx
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={2}>
                  <Typography sx={{ fontSize: '14px' }} variant="body1">
                    65KB
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography sx={{ fontSize: '14px' }} variant="body1">
                    1
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography sx={{ fontSize: '14px' }} variant="body1">
                    5
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </WebLayout>
    </>
  );
}

export default HomePageLogined;
