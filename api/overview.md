---
sidebar_position: 1
title: API Overview
---

# API Overview

The Radiant1 PMS API provides standardized interfaces for Property Management Systems to integrate with the Radiant1 platform. The API supports both REST and SOAP protocols to ensure compatibility with various PMS implementations.

## Protocols

### REST APIs
- **Format**: JSON
- **Protocol**: HTTPS
- **Authentication**: API Key (Bearer Token)
- **Best for**: Modern PMS systems, high-volume operations

### SOAP APIs
- **Format**: XML (OTA Standards)
- **Protocol**: HTTPS
- **Authentication**: WS-Security
- **Best for**: Legacy PMS systems, OTA compliance

## Base URLs

| Environment | REST API | SOAP API |
|-------------|-----------|----------|
| **Development** | `https://dev-api.radiant1.com` | `https://dev-api.radiant1.com/soap` |
| **Production** | `https://api.radiant1.com` | `https://api.radiant1.com/soap` |

## Request Headers

### REST APIs
```http
Content-Type: application/json
Accept: application/json
Authorization: Bearer YOUR_API_KEY
User-Agent: Your-PMS-Name/Version
```

### SOAP APIs
```xml
<soap:Header>
  <wsse:Security>
    <wsse:UsernameToken>
      <wsse:Username>YOUR_CHAIN_CODE</wsse:Username>
      <wsse:Password>YOUR_HOTEL_CODE</wsse:Password>
    </wsse:UsernameToken>
  </wsse:Security>
</soap:Header>
```

## Date Format Requirements

All date fields must use **ISO 8601** format:
- **Date**: `YYYY-MM-DD` (e.g., "2024-01-15")
- **DateTime**: `YYYY-MM-DDTHH:mm:ssZ` (e.g., "2024-01-15T14:30:00Z")

## Response Format

### Success Response
```json
{
  "success": "SUCCESS",
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "success": "ERROR",
  "message": "Error description",
  "details": "Additional error information"
}
```

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Request processed successfully |
| 400 | Bad Request - Validation failed |
| 401 | Unauthorized - Authentication failed |
| 404 | Not Found - Resource not found |
| 422 | Unprocessable Entity - Business logic validation failed |
| 500 | Internal Server Error |

## Rate Limiting

| API | Rate Limit |
|-----|------------|
| REST APIs | 100 requests per minute per hotel |
| SOAP APIs | 50 requests per minute per hotel |

## Available Endpoints

### REST Endpoints
- `POST /bookings` - Create/Update reservations
- `POST /statistics` - Push daily statistics
- `GET /health-checker` - Health check

### SOAP Operations
- `OTA_HotelResNotifRQ` - Hotel reservation notification
- `OTA_HotelStatsNotifRQ` - Hotel statistics notification
- `OTA_PingRQ` - Ping/health check

## Key Data Fields

### Booking Data
- **hotelCode** - Unique hotel identifier
- **reference** - Unique reservation reference
- **bookingDate** - Date when booking was created
- **lastUpdate** - Last modification timestamp
- **bookingSourceCode** - Booking source identifier
- **marketSegmentCode** - Market segment identifier
- **isHotelCollect** - Hotel collect payment flag
- **additionalNote** - Additional booking information

### Statistics Data (Complete!)
- **roomSold** - Number of rooms sold
- **cancellation** - Number of cancellations
- **noOfBookings** - Number of bookings
- **totalRevenue** - Total revenue amount
- **totalRoomRevenue** - Total room revenue
- **totalNonRoomRevenue** - Total non-room revenue
- **roomRevenue** - Room revenue amount
- **roomRevenueTax** - Room revenue tax
- **roomRevenueCommission** - Room revenue commission
- **roomRevenueServiceCharge** - Room revenue service charge
- **nonRoomRevenue** - Non-room revenue amount
- **nonRoomRevenueTax** - Non-room revenue tax
- **nonRoomRevenueCommission** - Non-room revenue commission
- **nonRoomRevenueServiceCharge** - Non-room revenue service charge

## Business Validation Rules

The API enforces comprehensive business rules to ensure data integrity:

### Room Validations
- Room status must be 'New' or 'Confirmed' for new reservations
- Cannot modify reservations after check-out
- Arrival date must be before departure date
- `isComplimentary` and `isHouseUse` cannot both be true

### Guest Validations
- Exactly one main guest must be set per room
- Birth date cannot be in the future
- Email format must be valid
- Phone number format recommended E.164

### Rate Validations
- Rates must cover entire stay period
- At least one `isRoomRevenue = true` rate per night
- Package codes cannot duplicate on same charging date

## SDKs and Libraries

Official SDKs are available for:

### Node.js
```bash
npm install @radiant1/pms-sdk
```

### Python
```bash
pip install radiant1-pms-sdk
```

### Java
```xml
<dependency>
  <groupId>com.radiant1</groupId>
  <artifactId>pms-sdk</artifactId>
  <version>2.1.0</version>
</dependency>
```

### C#
```bash
dotnet add package Radiant1.PMS.SDK
```

## Changelog

### v2.1.0 (Current)
- ✅ Added complete statistics data dictionary (17 revenue fields)
- ✅ Enhanced booking API with missing fields
- ✅ Improved validation error messages
- ✅ Added comprehensive business rules documentation

### v2.0.0
- ✅ Introduced REST API endpoints
- ✅ Enhanced SOAP authentication
- ✅ Added comprehensive validation rules

### v1.0.0
- ✅ Initial SOAP API release

## Support

- **Email**: api-support@radiant1.com
- **Documentation**: https://docs.radiant1.com
- **Status Page**: https://status.radiant1.com
- **GitHub Issues**: [Report issues here](https://github.com/chaiwatradiant1/radiant1-pms-api-docs/issues)

---

**Ready to integrate?** Start with the [REST Booking API](./rest/bookings) or [SOAP Reservation Notification](./soap/reservation-notification).