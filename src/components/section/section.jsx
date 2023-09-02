import PropTypes from 'prop-types';

import {Section, Title} from './section.module'

export const Sections = ({title, children}) => {
    return (
        <Section>
            <Title>{title}</Title>
            {children}
        </Section>
    )
}

Sections.propTypes = { 
     title: PropTypes.string.isRequired,
     children: PropTypes.node,
}