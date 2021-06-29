import { Button } from "@tarojs/components";

export function FixButton(props) {
    const {onClick, type = "primary", children, style={}, ...rest} = props
    return (
        <Button style={{position: "fixed", bottom: 0, width: "100%", borderRadius: 0, ...style}} type={type} onClick={onClick} {...rest}>
          {children}
        </Button>
    )
}
