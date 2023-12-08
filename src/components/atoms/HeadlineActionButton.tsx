import { Button, Typography } from "@mui/material";

type HeadlineActionButtonPropsType = {
  title: string,
}

const HeadlineActionButton = ({ title }: HeadlineActionButtonPropsType) => {

  const handleOnClick = () => {
    window.location.href = 'https://platform.kamva.academy/login/';
    // scrollIntoView();
  }

  const scrollIntoView = () => {
    document.getElementById("subjects")?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Button onClick={handleOnClick}
      sx={{
        width: { xs: 120, sm: 160, md: 200, lg: 240 },
        height: { xs: 60, sm: 70, md: 80, lg: 90 },
        border: "1px solid #3498DB",
        background: "rgba(255, 211, 88, 1) !important",
        borderRadius: 6,
        boxShadow: "2px 1px 4px 0px rgba(0, 0, 0, 0.25)"
      }}>
      <Typography color={'black'} fontSize={{ xs: 16, sm: 20, md: 24, lg: 28 }} fontWeight={500}>
        {title}
      </Typography>
    </Button>
  )
}

export default HeadlineActionButton;