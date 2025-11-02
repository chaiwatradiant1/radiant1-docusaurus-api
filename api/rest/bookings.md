---
sidebar_position: 1
title: Bookings API
---

# REST Bookings API

Push reservation data from your PMS to the Radiant1 platform.

## Endpoint

```http
POST /bookings
```

## Request Headers

```http
Content-Type: application/json
Accept: application/json
Authorization: Bearer YOUR_API_KEY
```

## Request Body

### BookingDto

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `hotelCode` | string | Yes | Unique hotel identifier | "HOTEL123" |
| `reference` | string | Yes | Unique reservation reference | "RES-2024-001" |
| `bookingDate` | string (ISO 8601) | Yes | Date when booking was created | "2024-01-15T10:30:00Z" |
| `additionalNote` | string | Yes | Additional booking notes | "Late arrival expected" |
| `lastUpdate` | string (ISO 8601) | Yes | Last modification timestamp | "2024-01-15T14:30:00Z" |
| `bookingSourceCode` | string | Yes | Booking source identifier | "WEBSITE" |
| `marketSegmentCode` | string | Yes | Market segment identifier | "LEISURE" |
| `isHotelCollect` | boolean | Yes | Hotel collect flag | true |
| `reservationRooms` | array | Yes | Array of room reservations | [RoomReservationDto] |

### RoomReservationDto

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `roomReference` | string | Yes | Unique room reference | "ROOM-001" |
| `roomTypeCode` | string | Yes | Room type identifier | "DELUXE" |
| `ratePlanCode` | string | Yes | Rate plan identifier | "BAR" |
| `status` | enum | Yes | Room status | "confirm" |
| `arrival` | string (ISO 8601) | Yes | Check-in date | "2024-02-01T15:00:00Z" |
| `departure` | string (ISO 8601) | Yes | Check-out date | "2024-02-03T11:00:00Z" |
| `adult` | number | Yes | Number of adults | 2 |
| `child` | number | Yes | Number of children | 1 |
| `isComplimentary` | boolean | Yes | Complimentary stay flag | false |
| `isHouseUse` | boolean | Yes | House use flag | false |
| `guests` | array | Yes | Array of guests | [GuestDto] |
| `rates` | array | Yes | Array of room rates | [RateDto] |

### GuestDto

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `firstName` | string | Yes | Guest first name | "John" |
| `lastName` | string | Yes | Guest last name | "Doe" |
| `birthDate` | string (ISO 8601) | Yes | Guest birthdate | "1985-05-15T00:00:00Z" |
| `gender` | string | Yes | Guest gender | "male" |
| `address` | string | Yes | Guest address | "123 Main St" |
| `city` | string | Yes | Guest city | "New York" |
| `zipCode` | string | Yes | Postal code | "10001" |
| `country` | string | No | Country code (ISO 3166-1 alpha-3) | "USA" |
| `nationality` | string | No | Nationality code | "USA" |
| `phoneNumber` | string | Yes | Phone number | "+1-555-0123" |
| `email` | string | Yes | Email address | "john.doe@example.com" |
| `isMainGuest` | boolean | Yes | Main guest flag | true |

### RateDto

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `packageCode` | string | Yes | Package identifier | "RR" |
| `packageName` | string | Yes | Package name | "Room Revenue" |
| `chargingDateFrom` | string (ISO 8601) | Yes | Charge start date | "2024-02-01T00:00:00Z" |
| `chargingDateTo` | string (ISO 8601) | Yes | Charge end date | "2024-02-01T00:00:00Z" |
| `isRoomRevenue` | boolean | Yes | Room revenue flag | true |
| `price` | number | Yes | Base price | 150.00 |
| `tax` | number | Yes | Tax amount | 15.00 |
| `serviceCharge` | number | Yes | Service charge | 10.00 |
| `commission` | number | Yes | Commission amount | 0.00 |
| `currency` | string | Yes | Currency code (ISO 4217) | "USD" |

## Room Status Values

| Value | Description |
|-------|-------------|
| `reserve` | Reservation is on hold |
| `confirm` | Reservation is confirmed |
| `check_in` | Guest has checked in |
| `check_out` | Guest has checked out |
| `cancelled` | Reservation is cancelled |
| `no_show` | Guest did not arrive |

## Request Example

```bash
curl -X POST https://api.radiant1.com/bookings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "hotelCode": "HOTEL123",
    "reference": "RES-2024-001",
    "bookingDate": "2024-01-15T10:30:00Z",
    "additionalNote": "Late arrival expected, guest prefers high floor",
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
        "child": 1,
        "isComplimentary": false,
        "isHouseUse": false,
        "guests": [
          {
            "firstName": "John",
            "lastName": "Doe",
            "birthDate": "1985-05-15T00:00:00Z",
            "gender": "male",
            "address": "123 Main Street, Apt 4B",
            "city": "New York",
            "zipCode": "10001",
            "country": "USA",
            "nationality": "USA",
            "phoneNumber": "+1-555-0123",
            "email": "john.doe@example.com",
            "isMainGuest": true
          },
          {
            "firstName": "Jane",
            "lastName": "Doe",
            "birthDate": "1987-08-22T00:00:00Z",
            "gender": "female",
            "address": "123 Main Street, Apt 4B",
            "city": "New York",
            "zipCode": "10001",
            "country": "USA",
            "nationality": "USA",
            "phoneNumber": "+1-555-0124",
            "email": "jane.doe@example.com",
            "isMainGuest": false
          }
        ],
        "rates": [
          {
            "packageCode": "RR",
            "packageName": "Room Revenue",
            "chargingDateFrom": "2024-02-01T00:00:00Z",
            "chargingDateTo": "2024-02-01T00:00:00Z",
            "isRoomRevenue": true,
            "price": 150.00,
            "tax": 15.00,
            "serviceCharge": 10.00,
            "commission": 0.00,
            "currency": "USD"
          },
          {
            "packageCode": "RR",
            "packageName": "Room Revenue",
            "chargingDateFrom": "2024-02-02T00:00:00Z",
            "chargingDateTo": "2024-02-02T00:00:00Z",
            "isRoomRevenue": true,
            "price": 150.00,
            "tax": 15.00,
            "serviceCharge": 10.00,
            "commission": 0.00,
            "currency": "USD"
          }
        ]
      }
    ]
  }'
```

## Response

### Success Response (200 OK)

```json
{
  "success": "SUCCESS",
  "message": "success"
}
```

### Error Response (400 Bad Request)

```json
{
  "success": "ERROR",
  "message": "Validation failed",
  "details": [
    {
      "field": "reservationRooms[0].arrival",
      "message": "Arrival date must be before departure date"
    }
  ]
}
```

### Error Response (422 Unprocessable Entity)

```json
{
  "success": "ERROR",
  "message": "Business logic validation failed",
  "details": "Room status must be New or Confirmed only"
}
```

## Common Error Scenarios

| Error Code | Description | Solution |
|------------|-------------|----------|
| VALIDATION_FAILED | Required fields missing or invalid format | Check request format and required fields |
| ROOM_STATUS_INVALID | Invalid room status value | Use valid room status values |
| GUEST_VALIDATION_FAILED | Guest information validation failed | Ensure exactly one main guest per room |
| RATE_VALIDATION_FAILED | Rate information validation failed | Ensure rates cover entire stay period |
| HOTEL_NOT_FOUND | Hotel code not found | Verify hotel code is correct |
| DUPLICATE_ROOM_REFERENCE | Room references must be unique | Use unique room reference values |

## Business Validation Rules

The API enforces these business rules:

### Room Status Rules
- New reservations must have status 'reserve' or 'confirm'
- Cannot modify reservations after check-out
- Cannot modify reservations after departure date

### Guest Rules
- Exactly one main guest must be specified per room
- Guest birth date cannot be in the future
- Email must be valid format
- Phone number should be in E.164 format

### Rate Rules
- Rates must cover entire stay period
- At least one room revenue rate per night
- Charging dates must be within stay period
- Package codes must be unique per charging date

### General Rules
- Arrival date must be before departure date
- Booking date cannot be after last update date
- Room references must be unique within reservation
- `isComplimentary` and `isHouseUse` cannot both be true

## Best Practices

1. **Idempotency**: Use the same `reference` for updates to existing reservations
2. **Timestamps**: Always include accurate `bookingDate` and `lastUpdate` timestamps
3. **Guest Information**: Provide complete guest details for all guests
4. **Rate Coverage**: Ensure rates cover every night of the stay
5. **Currency**: Use valid ISO 4217 currency codes (3 letters)
6. **Phone Numbers**: Use international format with country code
7. **Email Validation**: Ensure email addresses are valid

## Integration Notes

- Reservations are matched by `hotelCode` and `reference`
- Updates will overwrite existing reservation data
- Partial updates are not supported - send complete reservation data
- The API validates room availability and business rules
- Failed bookings are logged for troubleshooting

## SDK Examples

### Node.js

```javascript
const { Radiant1PMSClient } = require('@radiant1/pms-sdk');

const client = new Radiant1PMSClient({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.radiant1.com'
});

const booking = {
  hotelCode: 'HOTEL123',
  reference: 'RES-2024-001',
  bookingDate: '2024-01-15T10:30:00Z',
  additionalNote: 'Late arrival expected',
  lastUpdate: '2024-01-15T14:30:00Z',
  bookingSourceCode: 'WEBSITE',
  marketSegmentCode: 'LEISURE',
  isHotelCollect: true,
  reservationRooms: [
    // ... room data
  ]
};

try {
  const result = await client.bookings.create(booking);
  console.log('Booking created:', result);
} catch (error) {
  console.error('Booking failed:', error);
}
```

### Python

```python
from radiant1_pms_sdk import Radiant1PMSClient

client = Radiant1PMSClient(
    api_key='YOUR_API_KEY',
    base_url='https://api.radiant1.com'
)

booking = {
    'hotelCode': 'HOTEL123',
    'reference': 'RES-2024-001',
    'bookingDate': '2024-01-15T10:30:00Z',
    'additionalNote': 'Late arrival expected',
    'lastUpdate': '2024-01-15T14:30:00Z',
    'bookingSourceCode': 'WEBSITE',
    'marketSegmentCode': 'LEISURE',
    'isHotelCollect': True,
    'reservationRooms': [
        # ... room data
    ]
}

try:
    result = client.bookings.create(booking)
    print('Booking created:', result)
except Exception as error:
    print('Booking failed:', error)
```

---

**Related endpoints**: [Statistics API](../statistics) | [Error Handling](../validation/error-codes) | [Examples](../../examples/rest-examples)