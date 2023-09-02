import PropTypes from 'prop-types';

import { Notification } from './notification.module';

export const Notifications = ({message}) => (
<Notification>{message}</Notification>
)


Notifications.propTypes = {
    message: PropTypes.string.isRequired
}