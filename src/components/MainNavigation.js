import { Box, Link } from "@mui/material";

const MainNavigation = ({sections}) => {
  return (
    <Box component="nav" sx={{display: 'flex', gap: 6, pt: 1}}>
      {sections.map((section) => (
        <Link href={section.url} underline="hover">
          {section.title}
        </Link>
      ))}
    </Box>
  );
}

export default MainNavigation;