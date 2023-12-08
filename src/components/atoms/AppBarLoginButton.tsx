import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const AppBarLoginButton = () => {
  return (
    <Box>
      <Button
        component={Link}
        href={'https://platform.kamva.academy/login/'}
        sx={{
          width: { xs: "4rem", md: '6rem' },
          border: "1px solid #3498DB",
          background: "#ffd358 !important",
          borderRadius: 4,
        }}>
        <Typography
          sx={{
            color: "#000000",
            fontSize: { md: 18 },
          }}>
          {'ورود'}
        </Typography>
      </Button>
    </Box>
  )
}

export default AppBarLoginButton;