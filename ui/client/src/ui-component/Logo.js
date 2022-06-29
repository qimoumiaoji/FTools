// material-ui
import { useTheme } from '@mui/material/styles';
import ToolLogo from 'assets/images/logo.svg';
import { Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    return (
        <div>
            {/* <img src={ToolLogo} alt="React Logo" /> */}
            <Typography variant="h3" gutterBottom component="div">
                Hi, Web3
            </Typography>
        </div>
    );
};

export default Logo;
