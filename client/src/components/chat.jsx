
/*
chat view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the sign up view has a status bar located at the very-top across the full width of the view
the sign up view has a Headline Label located at the top left of the view, correct text needs defined
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the mid-top left of the view, text needs identified
sign up view has Label located at the mid-top left of the view, text needs identified
sign up view has Label located at the main area left of the view, text needs identified
the sign up view has a Pager located at the main area left of the view, correct text needs defined
sign up view has Label located at the bottom center of the view, text needs identified
sign up view has Label located at the bottom center of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { message_action }  from '../actions/chatActions.js'; 

        
        
       
        class chatView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // message event
            message = (value) => {
                const { message_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        message_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // send event
            send = () => {
                
                 send = () => {
                    <!-- ToDo: define what send will do in the send component --> 
                 })
                    
              }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-block-brown"> . . ‘ *4; </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> s </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for 7% button-white-standard action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard" 
                        onClick={() => this.7%()}>7%</Button> 

			</Col>


                           
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.chat
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ message_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(chatView);
    
        