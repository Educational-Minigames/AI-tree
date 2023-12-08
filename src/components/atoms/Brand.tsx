import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "assets/logo.png"
import Link from "next/link";

const Brand = () => {
  return (
    <Button size='small' disableRipple LinkComponent={Link} href="/">
      <Stack direction='row' alignContent={'center'} alignItems={'center'} justifyItems={'center'}>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Image alt="LOGO" src={logo} width={50} />
        </Box>
        <Typography color={'#3498DB'} fontSize={40} fontWeight={500} fontFamily="Lalezar">کاموا</Typography>
      </Stack>
    </Button>
  )
}

export default Brand;