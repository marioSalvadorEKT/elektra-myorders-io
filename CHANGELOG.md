# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.12.0] - 2020-07-24

### Fixed

- Status badge and order timeline for pick-up orders.

## [2.11.14] - 2020-07-22

### Fixed

- i18n promissory name.

## [2.11.13] - 2020-07-07

### Fixed

- i18n IT

## [2.11.12] - 2020-06-15

### Fixed

- i18n ES

## [2.11.11] - 2020-06-15

### Changed

- `REASONS_VERSION` from `1.0.3` to `1.0.4`, which fixes `IT` translations.

## [2.11.10] - 2020-06-15

### Fixed

- Italian i18n.

## [2.11.9] - 2020-06-09

### Fixed

- Add missing translations for a new order state

## [2.11.8] - 2020-06-04

### Changed

- `REASONS_VERSION` from `1.0.2` to `1.0.3`, which fixes one `EN` translation from "cancellation reasons".

## [2.11.7] - 2020-06-02

### Fixed

- Timeline `ES` "delivered" message.
- "current order" and "original order" `ES` messages.

## [2.11.6] - 2020-06-02

### Fixed

- Timeline `ES` "delivering" message.

## [2.11.5] - 2020-05-22

### Fixed

- Timeline `ES` "deliver to carrier" messages.

## [2.11.4] - 2020-05-21

### Fixed

- Order listing page.

## [2.11.3] - 2020-05-21

### Fixed

- Display the delivery window when the package has it.

## [2.11.2] - 2020-05-12

### Fixed

- `shippingEstimateDate` should not be transformed to UTC.

## [2.11.1] - 2020-05-06

### Fixed

- Prices calculation.

## [2.11.0] - 2020-04-27

### Added

- The view for items changed.

## [2.10.1] - 2019-11-21

### Fixed

- Portal dependency.

## [2.10.0] - 2019-11-19 [YANKED]

## [2.9.0] - 2019-11-19 [YANKED]

### Added

- **de** translations.

## [2.8.19] - 2019-09-26

### Added

- Translations for hard-coded `Total interest` string.

### Fixed

- Taxes names not being used on order summary.

## [2.8.18] - 2019-09-18

### Changed

- Update `@vtex/delivery-packages` version so it correctly compares shipping estimate dates.

## [2.8.17] - 2019-08-20

### Fixed

- Pickup order readiness conditional.

## [2.8.16] - 2019-08-07

### Fixed

- Delivering section translations in the **ProgressBar**.

### Added

- `hasFinished` prop to **ProgressBarSection**.

## [2.8.15] - 2019-07-31

### Fixed

- **TrackingProgress** table last change value to UTC.

## [2.8.14] - 2019-07-31

### Fixed

- Status badge show `ready for pickup` label instead of `shipped`.
- Consider order delivered only if all of its packages were delivered.

## [2.8.13] - 2019-07-23

### Fixed

- handle empty string and `null` status orders on `<StatusBadge>` and `<StatusColor>`.

## [2.8.12] - 2019-07-22

### Fixed

- Format dates and times with UTC, instead of local timezone.

### Added

- Missing locale messages for `it` and `ca`.

### Removed

- Unused locale messages.

## [2.8.11] - 2019-07-18

### Fixed

- handle orders with no current state as 'processing'.

## [2.8.10] - 2019-06-18

### Fixed

- rename incorrect `FormattedMessage` `defaultValue` parameter.
- translate plural and singular subscription frequencies.

## [2.8.9] - 2019-05-17

### Fixed

- order edit page breaking

## [2.8.8] - 2019-05-09

### Fixed

- status badge breaking my orders page when there are collapsed orders.

## [2.8.7] - 2019-05-08

### Fixed

- status badge delivery status.

## [2.8.6] - 2019-04-22

### Fixed

- Missing translation on `ReplacementHistory`.

## [2.8.5] - 2019-04-10

### Changed

- `trackingCode` visibility.

## [2.8.4] - 2019-04-10

### Fixed

- OrderAction routing behaviour

## [2.8.3] - 2019-04-10

### Fixed

- service memory

## [2.8.2] - 2019-04-01

### Removed

- `font-awesome` css module.

## [2.8.1] - 2019-03-21

### Changed

- Instead of using `import react-router-dom` changed to `import vtex.my-account-commons`

## [2.8.0] - 2019-03-12

### Added

- Add italian translation

## [2.7.4] - 2019-02-22

### Changed

- Move Orders link to the bottom of the list.

## [2.7.3] - 2019-02-20

### Fixed

- Some line height
- Alignment of card flag
- Alignment of product table cells
- Style of date formatting

## [2.7.2] - 2019-01-21

### Fixed

- Show marketplaceItems when available. See [vtex/delivery-packages#51](https://github.com/vtex/delivery-packages/pull/51) for details.

## [2.7.1] - 2019-01-17

### Fixed

- Do not show Interest totalizer when order have a transaction with a referenceValue as zero
- Totalizers translations

## [2.7.0] - 2019-01-15

### Changed

- Better display the order's address

### Removed

- Phone number from the Address box

## [2.6.0] - 2019-01-02

### Fixed

- Show item sellingPrice instead of price

### Added

- Add Catalan translation

## [2.5.0] - 2018-12-28

### Removed

- Graphql queries extracted to `my-subscriptions-graphql`.

## [2.4.2] - 2018-12-28

### Fixed

- Fix bank invoice URL and links

## [2.4.1] - 2018-12-04

### Fixed

- `updateSubscriptionSettings` mutation.

## [2.4.0] - 2018-11-30

### Changed

- Extract the Subscriptions components to different apps: `vtex.my-subscriptions`, `vtex.my-account-commons`.

## [2.3.3] - 2018-11-13

### Fixed

- Translation after updating subscriptions
- Product name displayed on the subscriptions details
- Number layout

## [2.3.2] - 2018-11-13

### Changed

- Using `vtex.my-account-commons` instead of `vtex.store-components`

## [2.3.1] - 2018-11-11

### Changed

- Using `ContentWrapper` from `vtex.store-components`

## [2.3.0] - 2018-11-06

### Fixed

- Translation of `purchaseDay`

## [2.2.0] - 2018-10-31

## [2.2.0] - 2018-10-31

### Fixed

- Order expected delivery timezone

### Removed

- npm `@vtex/styleguide`

### Added

- Go back links

## [2.1.0] - 2018-10-30

## [2.0.5] - 2018-10-29

### Fixed

- Fix headers translations.

### Changed

- Update the subscriptions endpoint.

## [2.0.4] - 2018-10-29

### Fixed

- App layout
- Fix Subscriptions initial dates
- Fix `react-accessible-accordion` version

## [2.0.3] - 2018-10-18

### Fixed

- PropTypes typo on `DetailedOrder`.
- Remove `my-account` extension points. They will be defined in `my-account` app.

## [2.0.2] - 2018-10-17

### Added

- `x-vtex-user-agent` header to requests.
