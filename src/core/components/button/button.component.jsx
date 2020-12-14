import React from 'react'

import { ButtonContainer } from './button.styles'


const ButtonComponent = React.forwardRef(({ 
    children, 
    ...props 
}, ref) => {
 
    return (
        <ButtonContainer  {...props}>
            {children}
        </ButtonContainer>
    )
});

export default ButtonComponent