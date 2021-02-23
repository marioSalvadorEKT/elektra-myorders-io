# My Orders 
My Orders pages powered by Render

# Prerequisites
To get the project up and running you need to have `VTEX CLI` installed on your machine.

# How to run this app?
`vtex link`

# How to see the orders' page without getting a permission error?
- Go to `{workspace}--{account}.myvtex{dev}.com/myorders` and see that there will be a message saying you need to log in
- Go to `{accountName}.vtexcommercestable.com.br/account/orders` and log in
- When you're logged in and you can see your orders, copy the `VtexIdclientAutCookie_{accountName}` cookie
- Create a new cookie on the `myvtex` domain with name `VtexIdclientAutCookie_{accountName}` and value copied from the last step
- Refresh the page and now you won't have any more permission issues

# Versions

1.x
- Integration with My Account (https://github.com/vtex-apps/my-account#my-account)
- Using vtex-tachyons and styleguide
- New Subscriptions
- Does not have extension points, they must be plugged in my account


0.x
- Currently the default version
- Using tachyons
- Old Subscriptions
- Extensions points (such as my credits plug)
