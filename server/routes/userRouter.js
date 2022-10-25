const express = require('express')
const services=require('../controller/render')


const router=express.Router()



router.get('/user_signin',services.isLoggedOut, services.loginRouter)
router.post('/user_signin',services.login)

router.get('/', services.isLoggedIn, services.userHome)
router.get('/user_logout', services.logout)

router.post('/user_home/addToCart',services.addToCart)
router.get('/cart', services.isLoggedIn, services.cart)


router.get('/user_registration',services.signupRouter)
router.post('/user_registration',services.signUp)

router.get('/mobile-verification', services.isLoggedIn,services.otpVerification)
router.get('/verifyOtp', services.isLoggedIn,services.verifyOtpPage)

router.post('/verifyOtp',services.verifyOtp)
router.post('/user/send-otp',services.sendOtp)
router.get('/product-view', services.isLoggedIn,services.productView)

router.get('/delete-from-cart', services.isLoggedIn,services.deleteFromCart)
router.post('/addToCart/cart-operation',services.cartOperation)

router.post('/cart/apply-coupon', services.applyCoupon)

router.get('/myAccount', services.isLoggedIn,services.myAccount)
router.get('/allOrders', services.isLoggedIn,services.allOrders)
router.get('/orderStatus', services.isLoggedIn,services.orderStatus)
router.post('/cancel-order',services.cancelOrder)


router.get('/cart/checkout', services.isLoggedIn, services.checkout);
router.get('/cart/checkout/shipping/add-new-address', services.isLoggedIn, services.addAddress);
router.post('/cart/checkout/shipping/add-new-address',  services.shipping);
router.get('/payment', services.isLoggedIn, services.paymentPage);
router.post('/payment',  services.payment);
router.post('/userPayment', services.userPayment)
router.get('/paymentSuccess', services.isLoggedIn,services.paymentSuccess)

router.get('/razorpay',services.razorpay)
router.get('/paypal',services.paypal)


router.get('/wishlist', services.isLoggedIn,services.wishlist)
router.get('/user-wishlist', services.isLoggedIn,services.addToWishlist)
router.get('/delete-wishlist', services.isLoggedIn,services.deleteFromWishlist)







module.exports=router