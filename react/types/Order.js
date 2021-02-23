import PropTypes from 'prop-types'

export const OrderShape = PropTypes.shape({
  orderId: PropTypes.string,
  sequence: PropTypes.string,
  marketplaceOrderId: PropTypes.string,
  marketplaceServicesEndpoint: PropTypes.string,
  sellerOrderId: PropTypes.string,
  origin: PropTypes.string,
  affiliateId: PropTypes.string,
  salesChannel: PropTypes.string,
  merchantName: PropTypes.any,
  status: PropTypes.string,
  statusDescription: PropTypes.string,
  value: PropTypes.number,
  creationDate: PropTypes.string,
  lastChange: PropTypes.string,
  orderGroup: PropTypes.string,
  totals: PropTypes.array,
  items: PropTypes.array,
  marketplaceItems: PropTypes.array,
  clientProfileData: PropTypes.object,
  giftRegistryData: PropTypes.any,
  marketingData: PropTypes.any,
  ratesAndBenefitsData: PropTypes.object,
  shippingData: PropTypes.object,
  paymentData: PropTypes.object,
  packageAttachment: PropTypes.object,
  sellers: PropTypes.array,
  callCenterOperatorData: PropTypes.any,
  followUpEmail: PropTypes.string,
  lastMessage: PropTypes.any,
  hostname: PropTypes.string,
  changesAttachment: PropTypes.any,
  openTextField: PropTypes.any,
  roundingError: PropTypes.number,
  orderFormId: PropTypes.string,
  commercialConditionData: PropTypes.any,
  isCompleted: PropTypes.bool,
  customData: PropTypes.any,
  storePreferencesData: PropTypes.object,
  allowCancellation: PropTypes.bool,
  allowEdition: PropTypes.bool,
  isCheckedIn: PropTypes.bool,
})