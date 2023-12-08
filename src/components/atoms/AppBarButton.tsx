import { Button, Typography } from "@mui/material";
import Link from "next/link";

type AppBarButtonPropsType = {
  title: string,
  href: string,
}

const AppBarButton = ({ title, href }: AppBarButtonPropsType) => {
  return (
    <Button variant="text" component={Link} href={href}>
      <Typography sx={{ color: "black", opacity: 0.8 }}>
        {title}
      </Typography>
    </Button>
  )
}

export default AppBarButton;