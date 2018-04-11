import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { getFlashMessages } from "./reducer"
import { removeMessage } from "./actions"

const FlashMessagesBox = ({messages, remove}) => (
  <div className="flash-box">
    {messages.map(m =>
      <div key={m.id} onClick={() => remove(m.id)} className={`message ${m.level}`}>{m.message}</div>
    )}
  </div>
)

FlashMessagesBox.propTypes = {
  messages: PropTypes.array,
  remove: PropTypes.func.isRequired
}
FlashMessagesBox.defaultProps = { messages: [] }

const mapStateToProps = (state) => ({
  messages: getFlashMessages(state)
})

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeMessage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesBox)
