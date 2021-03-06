import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import kebabCase from 'lodash/kebabCase'

import OrderUtils from '../../utils/OrderUtils'
import Order from './Order'
import OrderHeader from './OrderHeader'
import CollapsedOrder from './CollapsedOrder'

class DetailedOrder extends Component {
  render() {
    const { orderData, allowSAC, alwaysActive } = this.props

    if (!orderData) {
      return (
        <CollapsedOrder
          orderId={this.props.orderId}
          alwaysActive={alwaysActive}
        />
      )
    }
    const order = OrderUtils.mapOrder(orderData)
    return (
      <article
        className={`myo-order-card myo-order-status-${kebabCase(
          order.status
        )} w-100 mv7 ba overflow-hidden b--muted-4`}
        key={order.orderId}
      >
        <OrderHeader
          order={order}
          alwaysActive={alwaysActive}
          key={order.orderId}
        />
        <Order order={order} allowSAC={allowSAC} alwaysActive={alwaysActive} />
      </article>
    )
  }
}

DetailedOrder.propTypes = {
  orderData: PropTypes.object,
  alwaysActive: PropTypes.bool,
  allowSAC: PropTypes.bool,
  orderId: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => ({
  orderData: state.myOrders.detailedOrders[ownProps.orderId],
})

export default connect(mapStateToProps)(DetailedOrder)
