/*
edit profile view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the chat view has a status bar located at the very-top across the full width of the view
chat view has an Image located at the very-top in the center of the view. this is a placeholder and should be updated with higher resolution Image
chat view has Label located at the top left of the view, text needs identified
the chat will appear on focus with state is set
chat view has a Label located at the bottom center of the view with text s

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Button } from "reactstrap"

import { edit_profile_action } from "../actions/edit_profileActions.js"

class editprofileView extends React.Component {
  state = {
    show_loading_indicator: false
  }

  // edit_profile event
  edit_profile = value => {
    const { edit_profile_action } = this.props
    e.preventDefault()

    //Dispatch action mapped to redux
    edit_profile_action()

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Col md={12}>
              <p className="label-block-white"> steve barnett </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> id: 64983274 </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> fans </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> following </p>
            </Col>
            <Col md={12}>
              <p className="label-light-pink-lavender"> friends </p>
            </Col>
            <Col md={12}>
              <p className="label-block-white"> 218 3k1 1k2 </p>
            </Col>
            <Col md={12}>
              <p className="label-black-white"> 1k2 </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> 3k1 </p>
            </Col>
            <Col md={12} className="text-center">
              {" "}
              {/* <!-- TODO: Change placeholder image with higher res --> */}
              <img
                className="img-fluid"
                alt="Responsive image"
                src="http://path.to/replace/image"
              />
            </Col>{" "}
            <Col md={12}>
              <p className="label-white-standard"> logout </p>
            </Col>
            <Col md={12}>
              {/* <!-- TODO: Create unit test for edit_profile button-light-turquoise-light-sky-blue action --> */}
              <Button
                className="btn btn-lg btn-block button-light-turquoise-light-sky-blue"
                onClick={() => this.edit_profile()}
              >
                edit profile
              </Button>
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.edit_profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ edit_profile_action }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editprofileView)
