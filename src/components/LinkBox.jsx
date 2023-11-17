import PropTypes from 'prop-types'
import { Button } from '@mantine/core';


export default function LinkBox(props) {

    const { title, link, icon } = props;

    return (
        <Button
            size="lg"
            radius="lg"
            variant="filled"
            gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
            color="cyan"
            component="a"
            href={link}
            leftSection={icon}
            rightSection=" "
            justify="space-between"
            fullWidth
        >
            {title}
        </Button>
    )
}

LinkBox.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.object,
}