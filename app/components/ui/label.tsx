import React, { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
}

export const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  return (
    <label className={`block text-sm font-medium ${className}`} {...props}>
      {children}
    </label>
  )
}