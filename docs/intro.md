---
sidebar_position: 1
title: Introduction
slug: /
---

# Welcome to Radiant1 PMS API Documentation

The Radiant1 PMS API provides a comprehensive integration platform for Property Management Systems to connect with the Radiant1 ecosystem. This documentation covers both REST and SOAP protocols to ensure compatibility with various PMS implementations.

## ✨ What's Included

### 🚀 **Complete API Reference**
- **REST APIs** with JSON support
- **SOAP APIs** with OTA standards compliance
- **Real-time booking synchronization**
- **Daily statistics reporting**

### 📊 **Complete Data Dictionary**
- **All booking fields** with validation rules
- **Complete statistics breakdown** (17 revenue fields)
- **Guest information specifications**
- **Rate and pricing structures**

### 🔧 **Business Validation Rules**
- Real validation logic from reservation service
- Room status transition rules
- Guest and rate validation requirements
- Error handling and troubleshooting

### 💡 **Working Examples**
- Copy-paste ready code samples
- Multi-room booking scenarios
- Error handling patterns
- Integration best practices

## 🎯 Key Features Fixed in This Documentation

The original GitBook documentation was missing critical information. This version includes:

### 📈 **Statistics Data Dictionary - Now Complete!**
- ✅ `roomSold` - Number of rooms sold
- ✅ `cancellation` - Number of cancellations
- ✅ `noOfBookings` - Number of bookings
- ✅ `totalRevenue`, `totalRoomRevenue`, `totalNonRoomRevenue`
- ✅ Detailed revenue breakdown (tax, commission, service charges)
- ✅ All 17 revenue fields previously missing

### 🏨 **Booking API - Enhanced**
- ✅ `additionalNote` - Additional booking information
- ✅ `isHotelCollect` - Hotel collect payment flag
- ✅ `isComplimentary`, `isHouseUse` - Special stay flags
- ✅ Complete guest information (birthDate, gender, address, country)
- ✅ Proper room status enum values and transitions

### 🛡️ **Business Logic - Real Rules**
- ✅ Actual validation rules from reservation-service
- ✅ Room status validation (can't modify after check-out)
- ✅ Guest validation (exactly one main guest required)
- ✅ Rate coverage validation (must cover entire stay)
- ✅ Comprehensive error codes and messages

## 🚀 Quick Start

### 1. Choose Your Integration Method

| Method | Best For | Protocol | Format |
|--------|----------|----------|--------|
| **REST API** | Modern PMS, Cloud systems | HTTPS | JSON |
| **SOAP API** | Legacy PMS, OTA compliance | HTTPS | XML |

### 2. Get Your Credentials

Contact your Radiant1 representative to obtain:
- API credentials
- Hotel configuration details
- Test environment access

### 3. Make Your First API Call

#### REST API Example
```bash
curl -X POST https://api.radiant1.com/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "hotelCode": "HOTEL123",
    "reference": "RES-2024-001",
    "bookingDate": "2024-01-15T10:30:00Z",
    "additionalNote": "Late arrival expected",
    "lastUpdate": "2024-01-15T14:30:00Z",
    "bookingSourceCode": "WEBSITE",
    "marketSegmentCode": "LEISURE",
    "isHotelCollect": true,
    "reservationRooms": [
      {
        "roomReference": "ROOM-001",
        "roomTypeCode": "DELUXE",
        "ratePlanCode": "BAR",
        "status": "confirm",
        "arrival": "2024-02-01T15:00:00Z",
        "departure": "2024-02-03T11:00:00Z",
        "adult": 2,
        "child": 0,
        "isComplimentary": false,
        "isHouseUse": false,
        "guests": [
          {
            "firstName": "John",
            "lastName": "Smith",
            "birthDate": "1985-05-15T00:00:00Z",
            "gender": "male",
            "address": "123 Main Street",
            "city": "New York",
            "zipCode": "10001",
            "country": "USA",
            "phoneNumber": "+1-555-0123",
            "email": "john.smith@example.com",
            "isMainGuest": true
          }
        ],
        "rates": [
          {
            "packageCode": "RR",
            "packageName": "Room Revenue",
            "chargingDateFrom": "2024-02-01T00:00:00Z",
            "chargingDateTo": "2024-02-01T00:00:00Z",
            "isRoomRevenue": true,
            "price": 200.00,
            "tax": 20.00,
            "serviceCharge": 15.00,
            "commission": 0.00,
            "currency": "USD"
          }
        ]
      }
    ]
  }'
```

## 📋 Navigation

- **[Getting Started](./category/getting-started)** - Learn the basics and setup
- **[REST APIs](./category/rest-apis)** - Complete REST API reference
- **[SOAP APIs](./category/soap-apis)** - SOAP API documentation
- **[Data Models](./category/data-models)** - Complete data dictionary
- **[Examples](./category/examples)** - Working code examples

## 🆘 Support

- **Email**: api-support@radiant1.com
- **Status Page**: https://status.radiant1.com
- **GitHub Issues**: [Report issues here](https://github.com/chaiwatradiant1/radiant1-pms-api-docs/issues)

## 📥 Download Documentation

Want to use this documentation offline? [Download the complete markdown files](/files/radiant1-pms-api-documentation.zip).

---

**Ready to start integrating?** Begin with the [Quick Start guide](./getting-started/quick-start) or jump directly to the [API Reference](/api/overview).