# GENZYNEWS Notification System Documentation

## Overview
The GENZYNEWS portal now features a comprehensive notification system that keeps both admins and users informed about comment activities and system updates.

## Features Implemented

### 1. **Admin Dashboard Notification Center**
Located at `/admin` (Admin Dashboard)

**Features:**
- **Pending Comments Widget**: Displays up to 5 most recent pending comments
  - Shows commenter's name, avatar, and role badge (ADMIN/USER)
  - Displays comment content preview and article link
  - Quick approve/reject buttons for immediate action
  - Auto-refreshes every 10 seconds
  
- **Recent Notifications Widget**: Shows up to 5 most recent notifications
  - Displays notification type (comment, reply, system)
  - Shows user avatar and notification message
  - Links to related articles
  - Visual indicator for unread notifications
  - Auto-refreshes every 10 seconds

### 2. **Enhanced Dashboard Statistics**
- **Pending Comments Counter**: Red badge on Total Comments card showing count of pending approvals
- **Notification Badge**: Red badge on "Moderate Comments" quick action button
- **Real-time Updates**: All counters refresh automatically every 10 seconds

### 3. **User Notification System**
When comments are approved or rejected:
- Users receive automatic notifications about their comment status
- Notifications include:
  - Article title
  - Action taken (approved/rejected)
  - Link to the article
  - Timestamp

### 4. **Dedicated Notifications Management Page**
Located at `/admin/notifications`

**Features:**
- **Comprehensive List**: View all notifications for the admin user
- **Advanced Filtering**:
  - Status filter: All / Unread / Read
  - Type filter: All Types / Comments / Replies / System
  - Search by message content or user name
  
- **Bulk Actions**:
  - "Mark All Read" - Mark all notifications as read at once
  - "Delete Read" - Remove all read notifications
  
- **Individual Actions**:
  - Mark single notification as read
  - Delete individual notifications
  - Click to view related article
  
- **Visual Indicators**:
  - Blue ring around unread notifications
  - Blue dot indicator for unread status
  - Color-coded badges by notification type
  - User avatars for comment notifications
  
- **Statistics Display**:
  - Total notifications count
  - Unread vs read counts
  - Breakdown by notification type

### 5. **Comment Activity Tracking**
**Admin Receives Notifications When:**
- Users post new comments (all roles - admin and user)
- Comment includes user's name, avatar, and article title
- Notification links directly to the article

**Users Receive Notifications When:**
- Their comment is approved by admin
- Their comment is rejected by admin
- Notification includes article title and action taken

### 6. **Real-time Updates**
- All notification components auto-refresh every 10 seconds
- Notification badge in header updates in real-time
- Dashboard widgets show live pending counts
- No page refresh needed to see new notifications

## How to Use

### For Admins:

#### Viewing Notifications
1. **Header Badge**: Check the bell icon in the header for unread count
2. **Dashboard Widgets**: View pending comments and recent notifications on `/admin`
3. **Full List**: Visit `/admin/notifications` for complete notification management

#### Managing Comments via Notifications
1. **Quick Actions** (Dashboard):
   - Click "Approve" to immediately approve a pending comment
   - Click "Reject" to immediately reject a pending comment
   
2. **Detailed Management** (Comments Page):
   - Navigate to `/admin/comments` for full comment management
   - Use filters to find specific comments
   - View comment context and article details

#### Managing Notifications
1. **Mark as Read**:
   - Individual: Click the green checkmark icon
   - All at once: Click "Mark All Read" button
   
2. **Delete**:
   - Individual: Click the red trash icon
   - All read: Click "Delete Read" button
   
3. **Filter & Search**:
   - Use status tabs (All/Unread/Read)
   - Select notification type (Comment/Reply/System)
   - Search by keyword in message or username

### For Users:

#### Receiving Notifications
1. Check the bell icon in the header for new notifications
2. Click the bell to view notification dropdown
3. Click on a notification to:
   - Mark it as read
   - Navigate to the related article

#### Notification Types
- **Comment Approved**: Your comment is now visible to all users
- **Comment Rejected**: Your comment was not approved
- **New Reply**: Someone replied to your comment (future feature)

## Technical Details

### Data Storage
- All notifications stored in `localStorage` under `genzynews_notifications`
- Notifications persist across browser sessions
- Each notification includes:
  - Unique ID
  - Type (comment/reply/system)
  - Message content
  - Related article ID
  - Read/unread status
  - User information (ID, name, avatar)
  - Timestamp

### Auto-refresh Intervals
- Dashboard widgets: 10 seconds
- Header notification badge: 10 seconds
- Notifications page: 10 seconds

### Notification Creation
Notifications are automatically created when:
1. User posts a new comment → Admins notified
2. Admin approves comment → User notified
3. Admin rejects comment → User notified

### Routes
- `/admin` - Admin Dashboard with notification widgets
- `/admin/notifications` - Full notifications management
- `/admin/comments` - Comment moderation

## Benefits

### For Admins:
✅ Real-time awareness of pending comments  
✅ Quick approval workflow from dashboard  
✅ Centralized notification management  
✅ Filter and search capabilities  
✅ Bulk action support  
✅ No page refresh needed  

### For Users:
✅ Know when comments are approved/rejected  
✅ Direct links to related articles  
✅ Clean, organized notification interface  
✅ Persistent notification history  

## Performance
- Optimized with React.memo and useMemo
- Lazy loading for admin routes
- Efficient localStorage operations
- Auto-refresh intervals optimized for performance
- GPU-accelerated animations

## Future Enhancements (Suggestions)
- Email notifications (requires backend)
- Reply notifications between users
- Notification preferences/settings
- Push notifications (requires service worker)
- Notification sound alerts
- Custom notification retention periods
- Export notification history
