---
sidebar_position: 1
title: Quick Start
---

# Quick Start Guide

This guide will help you get your PMS integrated with the Radiant1 API in just a few steps.

## Prerequisites

Before you begin, make sure you have:

- ✅ Valid Radiant1 API credentials
- ✅ Hotel configured in Radiant1 system
- ✅ Understanding of your PMS data structure
- ✅ Development environment ready

## Step 1: Choose Your Integration Method

### REST API (Recommended for Modern PMS)
- **Protocol**: HTTPS
- **Format**: JSON
- **Performance**: Better for high-volume operations
- **Ease of Use**: Easier to implement and debug

### SOAP API (Recommended for OTA Compliance)
- **Protocol**: HTTPS with SOAP envelope
- **Format**: XML
- **Standards**: OTA-compliant schemas
- **Compatibility**: Better for legacy systems

## Step 2: Set Up Authentication

### REST API Authentication
```bash
# Set up your headers
export API_KEY="your-api-key"
export HOTEL_CODE="your-hotel-code"
```

### SOAP API Authentication
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

## Step 3: Make Your First API Call

### REST API - Create a Booking

```bash
curl -X POST https://dev-api.radiant1.com/bookings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "hotelCode": "'$HOTEL_CODE'",
    "reference": "TEST-001",
    "bookingDate": "2024-01-15T10:30:00Z",
    "additionalNote": "Test booking from quick start",
    "lastUpdate": "2024-01-15T10:30:00Z",
    "bookingSourceCode": "MANUAL",
    "marketSegmentCode": "TRANSIENT",
    "isHotelCollect": true,
    "reservationRooms": [
      {
        "roomReference": "ROOM-001",
        "roomTypeCode": "STANDARD",
        "ratePlanCode": "BAR",
        "status": "confirm",
        "arrival": "2024-02-01T15:00:00Z",
        "departure": "2024-02-02T11:00:00Z",
        "adult": 1,
        "child": 0,
        "isComplimentary": false,
        "isHouseUse": false,
        "guests": [
          {
            "firstName": "Test",
            "lastName": "Guest",
            "birthDate": "1990-01-01T00:00:00Z",
            "gender": "male",
            "address": "123 Test St",
            "city": "Test City",
            "zipCode": "12345",
            "phoneNumber": "+1-555-0123",
            "email": "test@example.com",
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
            "price": 100.00,
            "tax": 10.00,
            "serviceCharge": 5.00,
            "commission": 0.00,
            "currency": "USD"
          }
        ]
      }
    ]
  }'
```

### Expected Response
```json
{
  "success": "SUCCESS",
  "message": "success"
}
```

## Step 4: Send Statistics Data

```bash
curl -X POST https://dev-api.radiant1.com/statistics \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "hotelCode": "'$HOTEL_CODE'",
    "data": [
      {
        "date": "2024-01-15",
        "roomTypeCode": "STANDARD",
        "ratePlanCode": "BAR",
        "marketSegmentCode": "TRANSIENT",
        "bookingSourceCode": "WEBSITE",
        "roomSold": 25,
        "cancellation": 2,
        "noOfBookings": 15,
        "totalRevenue": 2750.00,
        "totalRoomRevenue": 2500.00,
        "totalNonRoomRevenue": 250.00,
        "roomRevenue": 2500.00,
        "roomRevenueTax": 250.00,
        "roomRevenueCommission": 125.00,
        "roomRevenueServiceCharge": 62.50,
        "nonRoomRevenue": 250.00,
        "nonRoomRevenueTax": 25.00,
        "nonRoomRevenueCommission": 12.50,
        "nonRoomRevenueServiceCharge": 6.25
      }
    ]
  }'
```

## Step 5: Common Integration Patterns

### Batch Processing
```javascript
async function processBatchReservations(reservations) {
  const results = [];

  for (const reservation of reservations) {
    try {
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(reservation)
      });

      const result = await response.json();
      results.push({ success: true, data: result });

    } catch (error) {
      results.push({ success: false, error: error.message });
    }

    // Rate limiting - wait between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  return results;
}
```

### Error Handling
```javascript
async function sendWithRetry(url, data, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        return await response.json();
      }

      // Don't retry client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        const error = await response.json();
        throw new Error(`Client error: ${error.message}`);
      }

      throw new Error(`Server error: ${response.status}`);

    } catch (error) {
      console.log(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        throw error;
      }

      // Exponential backoff
      const delayMs = Math.pow(2, attempt - 1) * 1000;
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
}
```

## Validation Checklist

Before sending data to the API, validate locally:

### Booking Validation
- [ ] All required fields present
- [ ] Arrival date before departure date
- [ ] Exactly one main guest per room
- [ ] Rates cover entire stay period
- [ ] Valid email and phone formats
- [ ] Valid currency codes (3 letters)

### Statistics Validation
- [ ] Date in YYYY-MM-DD format
- [ ] All monetary values non-negative
- [ ] Valid room type, rate plan, and segment codes
- [ ] Logical consistency in revenue calculations

## Next Steps

1. **Read the [REST API documentation](../category/rest-apis)** for complete endpoint details
2. **Review the [Data Models](../category/data-models)** for field specifications
3. **Check the [Examples](../category/examples)** for common scenarios
4. **Test in development environment** before production deployment

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Authentication failed | Verify API credentials are correct |
| Validation errors | Check required fields and data formats |
| Rate limiting | Implement delays between requests |
| Network timeouts | Increase timeout values or implement retry logic |

### Getting Help

- **Check the [Error Handling guide](../rest/error-handling)** for detailed error information
- **Review [Business Validation Rules](../data/validation-rules)** for common validation failures
- **Contact support**: api-support@radiant1.com
- **Create an issue**: [GitHub Issues](https://github.com/chaiwatradiant1/radiant1-pms-api-docs/issues)

---

**Ready for production?** Read the [Production Deployment guide](./production-deployment) for best practices and performance optimization.