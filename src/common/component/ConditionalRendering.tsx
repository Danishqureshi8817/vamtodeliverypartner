type ConditionalProps = {
    positive: JSX.Element | null | React.FC;
    negative: JSX.Element | null | React.FC;
    condition: boolean;
  };
  export default function  ConditionalRendering(props: ConditionalProps): any {
    const {positive, negative, condition} = props;
    if (condition) {
      return positive;
    }
    return negative;
  }
  