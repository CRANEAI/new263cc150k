
/*
search view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the search view has a status bar located at the very-top across the full width of the view
search view has Navigation Bar located at the very-top in the center of the view with text search
search view has Label located at the very-top center of the view, text needs identified
the search view has a Input Box located at the very-top in the center of the view, correct text needs defined
the search will appear on focus with state is set
search view has a Label located at the bottom center of the view with text space

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Input, InputGroup, InputGroupText } from 'reactstrap';
        
        
        import { close,_action, close,_action, close,_action, close,_action, close,_action, close,_action, close_action, close_action, close_action, close_action, close_action, close_action }  from '../actions/searchActions.js'; 

        
        
       
        class searchView extends React.Component {

            state = {
                 show_loading_indicator: false,
                search : '', 

            }
    
            
            // help event
            help = () => {
                
                 help = () => {
                    <!-- ToDo: define what help will do in the help component --> 
                 })
                    
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        let close,_data      =  {};
				close,_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close,_action(close,_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        let close,_data      =  {};
				close,_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close,_action(close,_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        let close,_data      =  {};
				close,_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close,_action(close,_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        let close,_data      =  {};
				close,_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close,_action(close,_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        let close,_data      =  {};
				close,_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close,_action(close,_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        let close,_data      =  {};
				close,_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close,_action(close,_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        let close_data      =  {};
				close_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close_action(close_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        let close_data      =  {};
				close_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close_action(close_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        let close_data      =  {};
				close_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close_action(close_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        let close_data      =  {};
				close_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close_action(close_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        let close_data      =  {};
				close_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close_action(close_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        let close_data      =  {};
				close_data.search   = this.state.search 


                        //Dispatch action mapped to redux
                        close_action(close_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
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

                        			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group input-light turquoise-block" 
                                        value={this.state.search}
                                        onChange={this.handleChange}
                                        name="search"
                                        placeholder="search" />				</InputGroup>			</Col>

			<Col md={12}>
				<p className="label-white-standard"> space </p>
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
                    data: state.search
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ close,_action, close,_action, close,_action, close,_action, close,_action, close,_action, close_action, close_action, close_action, close_action, close_action, close_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(searchView);
    
        