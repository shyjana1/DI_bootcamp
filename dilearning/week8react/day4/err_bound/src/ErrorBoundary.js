
import React from 'react'


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        this.state = { hasError: false };

        // Set hasError as true when an error is detected.
        this.setState({ hasError: true });
        
        if (this.state.hasError){
           console.log(error, errorInfo);
        }
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h3>Something went wrong.</h3>;
      }
  
      return this.props.children; 
    }
  }
export default ErrorBoundary