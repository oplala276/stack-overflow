import useragent from 'useragent';
import requestIp from 'request-ip';

const trackLogin = (req, res, next) => {
    try {        
    const userAgent = useragent.parse(req.headers['user-agent']);
    const ip = requestIp.getClientIp(req);
    req.loginInfo = {
        browser: userAgent.family,
        os: userAgent.os.toString(),
        device: userAgent.device.toString(),
        ip: ip,
    };
    next();
    } catch (error){
        console.log(error)
    }
};

export default trackLogin;
