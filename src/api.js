'use strict';
const client = require('./client');

module.exports = {
  user : require('./user'),
  invitee : require('./invitee'),
  folder : require('./folder'),
  device : require('./device'),
  group : require('./group'),
  groupmember : require('./groupmember'),
  invitation : require('./invitation'),
  file : require('./file'),
  sf : require('./sharedfolder'),
  sfmember  : require('./sharedfoldermember'),
  sfgroupmember : require('./sharedfoldergroupmember'),
  sfpendingmember : require('./sharedfolderpendingmember'),
  pending_requests : client.pending_requests
};
