import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonStyle = styled.button`
  border-radius: 3px;
  padding: 10px 25px;
  padding: ${({ size }) => size === 'small' && '5px 15px'};
  padding: ${({ size }) => size === 'medium' && '10px 25px'};
  padding: ${({ size }) => size === 'large' && '15px 30px'};
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`

const PrimaryButton = styled(ButtonStyle)`
  color: #444;
  background-color: #fff;
  border: 1px solid #ddd;
  color: ${({ disabled }) => disabled && '#ccc'};
  background-color: ${({ disabled }) => disabled && '#eee'};
  border: ${({ disabled }) => disabled && '1px solid #ccc'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
    background-color: #eee;
  }
`

const SecondaryButton = styled(ButtonStyle)`
  color: #4566b5;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${({ disabled }) => disabled && '#ccc'};
  background-color: ${({ disabled }) => disabled && '#eee'};
  border: ${({ disabled }) => disabled && '1px solid #ccc'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
    color: #fff;
    background-color: #4566b5;
  }
`

const SuccessButton = styled(ButtonStyle)`
  color: #fff;
  background-color: #5ea13c;
  border: 1px solid #5ea13c;
  color: ${({ disabled }) => disabled && '#ccc'};
  background-color: ${({ disabled }) => disabled && '#eee'};
  border: ${({ disabled }) => disabled && '1px solid #ccc'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
    background-color: #4b7f30;
  }
`

const WarningButton = styled(ButtonStyle)`
  color: #fff;
  background-color: #f58e1f;
  border: 1px solid #f58e1f;
  color: ${({ disabled }) => disabled && '#ccc'};
  background-color: ${({ disabled }) => disabled && '#eee'};
  border: ${({ disabled }) => disabled && '1px solid #ccc'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
    background-color: #d97e1b;
  }
`

const DangerButton = styled(ButtonStyle)`
  color: #fff;
  background-color: #db4339;
  border: 1px solid #db4339;
  color: ${({ disabled }) => disabled && '#ccc'};
  background-color: ${({ disabled }) => disabled && '#eee'};
  border: ${({ disabled }) => disabled && '1px solid #ccc'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
    background-color: #b2372f;
  }
`

const Button = ({ children, size, disabled, onClick, type }) => {
  switch (type) {
    case 'primary':
      return (
        <PrimaryButton disabled={disabled} onClick={onClick} size={size}>
          {children}
        </PrimaryButton>
      )

    case 'secondary':
      return (
        <SecondaryButton disabled={disabled} onClick={onClick} size={size}>
          {children}
        </SecondaryButton>
      )

    case 'success':
      return (
        <SuccessButton disabled={disabled} onClick={onClick} size={size}>
          {children}
        </SuccessButton>
      )

    case 'warning':
      return (
        <WarningButton disabled={disabled} onClick={onClick} size={size}>
          {children}
        </WarningButton>
      )

    case 'danger':
      return (
        <DangerButton disabled={disabled} onClick={onClick} size={size}>
          {children}
        </DangerButton>
      )

    default:
      return (
        <PrimaryButton disabled={disabled} onClick={onClick} size={size}>
          {children}
        </PrimaryButton>
      )
  }
}

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** The size of the Button */
  disabled: PropTypes.bool,
  /** Disable Button */
  onClick: PropTypes.func,
  /** On user click */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button Type */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]),
}

export default Button
