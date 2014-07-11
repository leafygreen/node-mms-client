module.exports = {
  "$schema": "http://json-schema.org/draft-04/hyper-schema",
  "definitions": {
    "alert": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Alert",
      "definitions": {
        "id": {
          "description": "Unique identifier",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that this alert was opened for.",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "typeName": {
          "description": "The type of alert. Possible values are: AGENT BACKUP HOST HOST_METRIC REPLICA_SET",
          "example": "AGENT",
          "type": [
            "string"
          ]
        },
        "eventTypeName": {
          "description": "The name of the event that triggered the alert.",
          "example": "MONITORING_AGENT_DOWN",
          "type": [
            "string"
          ]
        },
        "status": {
          "description": "The current state of the alert. Possible values are: OPEN CLOSED",
          "example": "OPEN",
          "type": [
            "string"
          ]
        },
        "acknowledgedUntil": {
          "description": "The date through which the alert has been acknowledged. Will not be present if the alert has never been acknowledged.",
          "example": "2014-03-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "created": {
          "description": "When the alert was opened.",
          "example": "2014-03-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "updated": {
          "description": "When the alert was last updated.",
          "example": "2014-03-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "resolved": {
          "description": "When the alert was closed. Only present if the status is CLOSED.",
          "example": "2014-03-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "lastNotified": {
          "description": "When the last notification was sent for this alert. Only present if notifications have been sent.",
          "example": "2014-03-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "metricName": {
          "description": "The name of the metric whose value went outside the threshold. Only present for alerts of type HOST_METRIC",
          "example": "ASSERT_REGULAR",
          "type": [
            "string"
          ]
        },
        "currentValue-number": {
          "description": "The value of the metric.",
          "example": "100.0",
          "type": [
            "number"
          ]
        },
        "currentValue-units": {
          "description": "The units for the value. Depends on the type of metric. For example, a metric that measures memory consumption would have a byte measurement, while a metric that measures time would have a time unit. Possible values are: BITS KILOBITS MEGABITS GIGABITS BYTES KILOBYTES MEGABYTES GIGABYTES TERABYTES PETABYTES MILLISECONDS SECONDS MINUTES HOURS DAYS RAW",
          "example": "BITS",
          "type": [
            "string"
          ]
        }
      },
      "description": "Working with MMS Alerts",
      "links": [
        {
          "description": "Info for existing alert.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alerts/{(%23%2Fdefinitions%2Falert%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing alerts.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alerts",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "List existing alerts for specified alert config.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs/{(%23%2Fdefinitions%2FalertConfig%2Fdefinitions%2Fid)}/alerts",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing alert.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alerts/{(%23%2Fdefinitions%2Falert%2Fdefinitions%2Fid)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/alert/definitions/id"
        },
        "groupId": {
          "$ref": "#/definitions/alert/definitions/groupId"
        },
        "typeName": {
          "$ref": "#/definitions/alert/definitions/typeName"
        },
        "eventTypeName": {
          "$ref": "#/definitions/alert/definitions/eventTypeName"
        },
        "status": {
          "$ref": "#/definitions/alert/definitions/status"
        },
        "acknowledgedUntil": {
          "$ref": "#/definitions/alert/definitions/acknowledgedUntil"
        },
        "created": {
          "$ref": "#/definitions/alert/definitions/created"
        },
        "updated": {
          "$ref": "#/definitions/alert/definitions/updated"
        },
        "resolved": {
          "$ref": "#/definitions/alert/definitions/resolved"
        },
        "lastNotified": {
          "$ref": "#/definitions/alert/definitions/lastNotified"
        },
        "metricName": {
          "$ref": "#/definitions/alert/definitions/metricName"
        },
        "currentValue": {
          "description": "The current value of the metric that triggered the alert. Only present for alerts of type HOST_METRIC.",
          "properties": {
            "number": {
              "$ref": "#/definitions/alert/definitions/currentValue-number"
            },
            "units": {
              "$ref": "#/definitions/alert/definitions/currentValue-units"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      },
      "type": [
        "object"
      ]
    },
    "alertConfig": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "AlertConfig",
      "definitions": {
        "id": {
          "description": "Unique identifier.",
          "example": "533dc40ae4b00835ff81eaee",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that owns this alert configuration.",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "typeName": {
          "description": "The type of this alert configuration. Supports the same values as the typeName field of the alerts resource.",
          "example": "HOST_METRIC",
          "type": [
            "string"
          ]
        },
        "eventTypeName": {
          "description": "The type of event that will trigger an alert. Supports the same values as the eventTypeName field of the alerts resource.",
          "example": "OUTSIDE_METRIC_THRESHOLD",
          "type": [
            "string"
          ]
        },
        "created": {
          "description": "When this alert configuration was created.",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "updated": {
          "description": "When this alert configuration was last updated.",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "enabled": {
          "description": "Is this alert configuration enabled?",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "matchers-fieldName": {
          "description": "The name of the field in the target object to match on. The available fields depend on the typeName:",
          "example": "hostnameAndPort",
          "type": [
            "string"
          ]
        },
        "matchers-operator": {
          "description": "The operator to test the field’s value. Possible values are: EQUALS NOT_EQUALS CONTAINS NOT_CONTAINS STARTS_WITH ENDS_WITH REGEX",
          "example": "EQUALS",
          "type": [
            "string"
          ]
        },
        "matchers-value": {
          "description": "The value to test with the specified operator. When matching on the TYPE_NAME field for a HOST or HOST_METRIC alert, the possible typeName values are: PRIMARY SECONDARY STANDALONE CONFIG MONGOS",
          "example": "mongo.babypearfoo.com:27017",
          "type": [
            "string"
          ]
        },
        "notifications-typeName": {
          "description": "The type of alert notification. Possible values are: GROUP USER SMS EMAIL PAGER_DUTY HIPCHAT SNMP. Note that SNMP notifications are not available in the cloud version of MMS. This feature is only available to On Premise installations.",
          "example": "SMS",
          "type": [
            "string"
          ]
        },
        "notifications-delayMin": {
          "description": "The number of minutes to wait after an alert condition is detected before sending out the first notification.",
          "example": "5",
          "type": [
            "integer"
          ]
        },
        "notifications-intervalMin": {
          "description": "The number of minutes to wait between succcessive notifications for unacknowledged alerts that are not resolved.",
          "example": "0",
          "type": [
            "integer"
          ]
        },
        "notifications-emailAddress": {
          "description": "The email address to which to send notification. Only present for notifications of type EMAIL.",
          "example": "jane.doe@gmail.com",
          "type": [
            "string"
          ]
        },
        "notifications-notificationToken": {
          "description": "A HipChat API token. Only present for notifications of type HIP_CHAT.",
          "example": "123456abcdef",
          "type": [
            "string"
          ]
        },
        "notifications-roomName": {
          "description": "HipChat room name. Only present for notifications of type HIP_CHAT.",
          "example": "Test Chat Room",
          "type": [
            "string"
          ]
        },
        "notifications-emailEnabled": {
          "description": "Should email notifications be sent? Only present for notifications of type GROUP and USER.",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "notifications-smsEnabled": {
          "description": "Should SMS notifications be sent? Only present for notifications of type GROUP and USER.",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "notifications-username": {
          "description": "The name of an MMS user to which to send notifications. Only a user in the group that owns the alert configuration is allowed here.",
          "example": "jane.doe@gmail.com",
          "type": [
            "string"
          ]
        },
        "notifications-mobileNumber": {
          "description": "Mobile number to send SMS messages to. Only present for notifications of type SMS.",
          "example": "(212) 212-1212",
          "type": [
            "string"
          ]
        },
        "notifications-snmpAddress": {
          "description": "Hostname and port to send SNMP traps to. Note that SNMP is only supported for On Premise MMS; also, at this time MMS is only able to send SNMP traps to the standard SNMP port (161).",
          "example": "somedomain.com:161",
          "type": [
            "string"
          ]
        },
        "notifications-serviceKey": {
          "description": "PagerDuty service key.",
          "example": "123456abcdef",
          "type": [
            "string"
          ]
        },
        "metricThreshold-metricName": {
          "description": "The name of the metric to check. Supports the same values as the metricName field of the alerts resource.",
          "example": "MEMORY_RESIDENT",
          "type": [
            "string"
          ]
        },
        "metricThreshold-operator": {
          "description": "The operator to apply when checking the current metric value against the threshold value. Possible values are: GREATER_THAN LESS_THAN",
          "example": "GREATER_THAN",
          "type": [
            "string"
          ]
        },
        "metricThreshold-threshold": {
          "description": "The threshold value outside of which an alert will be triggered.",
          "example": "7",
          "type": [
            "integer"
          ]
        },
        "metricThreshold-units": {
          "description": "The units for the threshold value. Supports the same values as the currentValue.units field of the alerts resource.",
          "example": "GIGABYTES",
          "type": [
            "string"
          ]
        },
        "metricThreshold-mode": {
          "description": "The mode to use when computing the current metric value. Possible values are: AVERAGE TOTAL",
          "example": "TOTAL",
          "type": [
            "string"
          ]
        }
      },
      "description": "Working with MMS Alert Configurations",
      "links": [
        {
          "description": "Create a new alertConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing alertConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs/{(%23%2Fdefinitions%2FalertConfig%2Fdefinitions%2Fid)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing alertConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs/{(%23%2Fdefinitions%2FalertConfig%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing alertConfigs.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Replace an existing alertConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs/{(%23%2Fdefinitions%2FalertConfig%2Fdefinitions%2Fid)}",
          "method": "PUT",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Replace"
        },
        {
          "description": "Update an existing alertConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/alertConfigs/{(%23%2Fdefinitions%2FalertConfig%2Fdefinitions%2Fid)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/alertConfig/definitions/id"
        },
        "groupId": {
          "$ref": "#/definitions/alertConfig/definitions/groupId"
        },
        "typeName": {
          "$ref": "#/definitions/alertConfig/definitions/typeName"
        },
        "eventTypeName": {
          "$ref": "#/definitions/alertConfig/definitions/eventTypeName"
        },
        "created": {
          "$ref": "#/definitions/alertConfig/definitions/created"
        },
        "updated": {
          "$ref": "#/definitions/alertConfig/definitions/updated"
        },
        "enabled": {
          "$ref": "#/definitions/alertConfig/definitions/enabled"
        },
        "matchers": {
          "description": "The current value of the metric that triggered the alert. Only present for alerts of type HOST_METRIC.",
          "properties": {
            "fieldName": {
              "$ref": "#/definitions/alertConfig/definitions/matchers-fieldName"
            },
            "operator": {
              "$ref": "#/definitions/alertConfig/definitions/matchers-operator"
            },
            "value": {
              "$ref": "#/definitions/alertConfig/definitions/matchers-value"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "notifications": {
          "description": "Notifications to send when an alert condition is detected.",
          "properties": {
            "typeName": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-typeName"
            },
            "delayMin": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-delayMin"
            },
            "intervalMin": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-intervalMin"
            },
            "emailAddress": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-emailAddress"
            },
            "notificationToken": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-notificationToken"
            },
            "roomName": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-roomName"
            },
            "emailEnabled": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-emailEnabled"
            },
            "smsEnabled": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-smsEnabled"
            },
            "username": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-username"
            },
            "mobileNumber": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-mobileNumber"
            },
            "snmpAddress": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-snmpAddress"
            },
            "serviceKey": {
              "$ref": "#/definitions/alertConfig/definitions/notifications-serviceKey"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "metricThreshold": {
          "description": "The threshold that will cause an alert to be triggered. Only present for alerts of the HOST_METRIC.",
          "properties": {
            "metricName": {
              "$ref": "#/definitions/alertConfig/definitions/metricThreshold-metricName"
            },
            "operator": {
              "$ref": "#/definitions/alertConfig/definitions/metricThreshold-operator"
            },
            "threshold": {
              "$ref": "#/definitions/alertConfig/definitions/metricThreshold-threshold"
            },
            "units": {
              "$ref": "#/definitions/alertConfig/definitions/metricThreshold-units"
            },
            "mode": {
              "$ref": "#/definitions/alertConfig/definitions/metricThreshold-mode"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      },
      "type": [
        "object"
      ]
    },
    "backupConfig": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Backup Configurations",
      "definitions": {
        "clusterId": {
          "description": "ID of the cluster that this backup configuration is for.",
          "example": "5196e5b0e4b0fca9cc88334a",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that owns this host.",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "statusName": {
          "description": "The current (or desired) status of the backup configuration. Possible values are: INACTIVE PROVISIONING STARTED STOPPED TERMINATING",
          "example": "STARTED",
          "type": [
            "string"
          ]
        },
        "username": {
          "description": "The username to use to connect to the sync source database. Only present when auth is required to connect to the mongod being backed up.",
          "example": "bob@gmail.com",
          "type": [
            "string"
          ]
        },
        "password": {
          "description": "The username to use to connect to the sync source database. Only present when auth is required to connect to the mongod being backed up.",
          "example": "12!@hello",
          "type": [
            "string"
          ]
        },
        "sslEnabled": {
          "description": "Is SSL enabled for the sync source database?",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "syncSource": {
          "description": "The database to use to get data to be backed up. Possible values are either a specific hostname or one of: PRIMARY SECONDARY. This field is only used when updating a backup configuration. It is not returned by a GET request.",
          "example": "SECONDARY",
          "type": [
            "string"
          ]
        },
        "excludedNamespaces": {
          "description": "A list of database names and/or collection names that should not be backed up. A string without a dot is assumed to be a database name; a string with a dot is assumed to mean dbName.collectionName.",
          "type": [
            "array"
          ]
        }
      },
      "description": "Working with MMS Backup Configurations",
      "links": [
        {
          "description": "Info for existing backupConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/backupConfigs/{(%23%2Fdefinitions%2FbackupConfig%2Fdefinitions%2FclusterId)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing backupConfigs.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/backupConfigs",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing backupConfig.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/backupConfigs/{(%23%2Fdefinitions%2FbackupConfig%2Fdefinitions%2FclusterId)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "clusterId": {
          "$ref": "#/definitions/backupConfig/definitions/clusterId"
        },
        "groupId": {
          "$ref": "#/definitions/backupConfig/definitions/groupId"
        },
        "statusName": {
          "$ref": "#/definitions/backupConfig/definitions/statusName"
        },
        "username": {
          "$ref": "#/definitions/backupConfig/definitions/username"
        },
        "password": {
          "$ref": "#/definitions/backupConfig/definitions/password"
        },
        "sslEnabled": {
          "$ref": "#/definitions/backupConfig/definitions/password"
        },
        "syncSource": {
          "$ref": "#/definitions/backupConfig/definitions/password"
        },
        "excludedNamespaces": {
          "$ref": "#/definitions/backupConfig/definitions/password"
        }
      },
      "type": [
        "object"
      ]
    },
    "cluster": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Cluster",
      "definitions": {
        "id": {
          "description": "Unique identifier",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that owns this cluster.",
          "example": "533d7d4730040be257defe88",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "typeName": {
          "description": "Specifies what kind of cluster this is. Possible values are: MASTER_SLAVE REPLICA_SET SHARDED SHARDED_REPLICA_SET",
          "example": "REPLICA_SET",
          "type": [
            "string"
          ]
        },
        "clusterName": {
          "description": "Display name of the cluster. Only applies to sharded clusters. Note that mongod itself doesn’t allow you to name a cluster; this name is supplied by (and editable within) MMS. For a replica set within a sharded cluster, the cluster name is the name of its parent cluster.",
          "example": "Cluster 0",
          "type": [
            "string"
          ]
        },
        "shardName": {
          "description": "Name of the shard. Only present for a cluster of type SHARDED or REPLICA_SET that is part of a sharded cluster.",
          "example": "shard001",
          "type": [
            "string"
          ]
        },
        "replicaSetName": {
          "description": "Name of the replica set. Only present for a cluster of type REPLICA_SET.",
          "example": "rs1",
          "type": [
            "string"
          ]
        },
        "lastHeartbeat": {
          "description": "The approximate last time MMS processed a ping from this cluster.",
          "example": "2014-02-26T17:32:45Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        }
      },
      "description": "Working with MMS Clusters",
      "links": [
        {
          "description": "Info for existing cluster.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/clusters/{(%23%2Fdefinitions%2Fcluster%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing clusters.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/clusters",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing cluster.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/clusters/{(%23%2Fdefinitions%2Fcluster%2Fdefinitions%2Fid)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/cluster/definitions/id"
        },
        "groupId": {
          "$ref": "#/definitions/cluster/definitions/groupId"
        },
        "typeName": {
          "$ref": "#/definitions/cluster/definitions/typeName"
        },
        "clusterName": {
          "$ref": "#/definitions/cluster/definitions/clusterName"
        },
        "shardName": {
          "$ref": "#/definitions/cluster/definitions/shardName"
        },
        "replicaSetName": {
          "$ref": "#/definitions/cluster/definitions/replicaSetName"
        },
        "lastHeartbeat": {
          "$ref": "#/definitions/cluster/definitions/lastHeartbeat"
        }
      },
      "type": [
        "object"
      ]
    },
    "group": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Group",
      "definitions": {
        "id": {
          "description": "Unique identifier",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "name": {
          "description": "Display name for the group",
          "example": "My Group",
          "type": [
            "string"
          ]
        },
        "lastActiveAgent": {
          "description": "Date that a ping was last received from one of the group's monitoring agents.",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "activeAgentCount": {
          "description": "Number of monitoring agents sending regular pings to MMS.",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "replicaSetCount": {
          "description": "Total number of replica sets for this group.",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "shardCount": {
          "description": "Total number of shards for this group.",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "arbiter": {
          "description": "Number of arbiters in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "config": {
          "description": "Number of configs in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "primary": {
          "description": "Number of primaries in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "secondary": {
          "description": "Number of secondaries in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "mongos": {
          "description": "Number of mongoss in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "master": {
          "description": "Number of masters in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "slave": {
          "description": "Number of slaves in hostsCounts",
          "example": "1",
          "type": [
            "integer"
          ]
        },
        "publicApiEnabled": {
          "description": "Is the Public API enabled for this group? This is a read-only field that will always be true for groups created with the API. Note that for groups created in the MMS UI, the only way to set this flag to true is by enabling the Public API for the group in the Settings tab.",
          "example": "true",
          "type": [
            "boolean"
          ]
        }
      },
      "description": "Working with MMS Groups",
      "links": [
        {
          "description": "Create a new group.",
          "href": "/groups",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing group.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing groups.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing groups.",
          "href": "/groups",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/group/definitions/id"
        },
        "name": {
          "$ref": "#/definitions/group/definitions/name"
        },
        "hostsCounts": {
          "description": "The total number of hosts by type. The embedded fields should be self-explanatory.",
          "properties": {
            "arbiter": {
              "$ref": "#/definitions/group/definitions/arbiter"
            },
            "config": {
              "$ref": "#/definitions/group/definitions/config"
            },
            "primary": {
              "$ref": "#/definitions/group/definitions/primary"
            },
            "secondary": {
              "$ref": "#/definitions/group/definitions/secondary"
            },
            "mongos": {
              "$ref": "#/definitions/group/definitions/mongos"
            },
            "master": {
              "$ref": "#/definitions/group/definitions/master"
            },
            "slave": {
              "$ref": "#/definitions/group/definitions/slave"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        },
        "lastActiveAgent": {
          "$ref": "#/definitions/group/definitions/lastActiveAgent"
        },
        "activeAgentCount": {
          "$ref": "#/definitions/group/definitions/activeAgentCount"
        },
        "replicaSetCount": {
          "$ref": "#/definitions/group/definitions/replicaSetCount"
        },
        "shardCount": {
          "$ref": "#/definitions/group/definitions/shardCount"
        },
        "publicApiEnabled": {
          "$ref": "#/definitions/group/definitions/publicApiEnabled"
        }
      },
      "type": [
        "object"
      ]
    },
    "host": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Host",
      "definitions": {
        "id": {
          "description": "Unique identifier",
          "example": "4059580c20c4581872ef24d0b8f5dca0",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that owns this host.",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "hostname": {
          "description": "Primary hostname. A host typically has several aliases, so the primary is the best available name as decided by MMS.",
          "example": "localhost",
          "type": [
            "string"
          ]
        },
        "port": {
          "description": "Port that MongoDB process (mongod or mongos) listens on.",
          "example": "27017",
          "type": [
            "integer"
          ]
        },
        "typeName": {
          "description": "Type for this host. Possible values are: STANDALONE REPLICA_PRIMARY REPLICA_SECONDARY REPLICA_ARBITER RECOVERING MASTER SLAVE SHARD_MONGOS SHARD_CONFIG SHARD_STANDALONE SHARD_PRIMARY SHARD_SECONDARY",
          "example": "STANDALONE",
          "type": [
            "string"
          ]
        },
        "lastPing": {
          "description": "When the last ping for this host was received.",
          "example": "2014-04-22T19:56:50Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "ipAddress": {
          "description": "IP address of this host.",
          "example": "10.10.10.1",
          "type": [
            "string"
          ]
        },
        "version": {
          "description": "Version of MongoDB running on this host.",
          "example": "2.6.3",
          "type": [
            "string"
          ]
        },
        "deactivated": {
          "description": "Has this host been deactivated by MMS? A host will be marked as deactivated when MMS hasn’t received a ping from it in several days.",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "hasStartupWarnings": {
          "description": "Are there startup warnings for this host?",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "sslEnabled": {
          "description": "Is SSL enabled for this host?",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "logsEnabled": {
          "description": "Is MMS collecting logs for this host?",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "lastReactivated": {
          "description": "The last time this has was manually reactivated.",
          "example": "2014-04-22T19:56:50Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "uptimeMsec": {
          "description": "Number of milliseconds since this host’s last restart.",
          "example": "1024",
          "type": [
            "number"
          ]
        },
        "lastRestart": {
          "description": "Date this host was last restarted.",
          "example": "2014-04-22T19:56:50Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "shardName": {
          "description": "Name of the shard this host belongs to. Only present if the host is part of a sharded cluster.",
          "example": "myShard0",
          "type": [
            "string"
          ]
        },
        "replicaSetName": {
          "description": "Name of the replica set this host belongs to. Only present if this host is part of a replica set.",
          "example": "rs0",
          "type": [
            "string"
          ]
        },
        "replicaStateName": {
          "description": "Current state of this host within a replica set. Only present if this host is part of a replica set. See Replica Set Member States for possible values.",
          "example": "SECONDARY",
          "type": [
            "string"
          ]
        },
        "created": {
          "description": "Date this host was created or first discovered by MMS.",
          "example": "2013-12-15T09:17:23Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "hostEnabled": {
          "description": "Is this host currently enabled? Hosts can be manually disabled in the MMS UI.",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "journalingEnabled": {
          "description": "Is journaling enabled for this host?",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "alertsEnabled": {
          "description": "Are alerts enabled for this host?",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "muninEnabled": {
          "description": "Are Munin stats being collected for this host?",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "hidden": {
          "description": "Is this host currently hidden? When MMS deactivates a host, it will also mark it as hidden.",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "profilerEnabled": {
          "description": "Is MMS collecting profile information from this host?",
          "example": "true",
          "type": [
            "boolean"
          ]
        },
        "lowUlimit": {
          "description": "Does this host have a low ulimit setting?",
          "example": "false",
          "type": [
            "boolean"
          ]
        },
        "muninPort": {
          "description": "What port should be used to collect Munin stats from this host?",
          "example": "4949",
          "type": [
            "integer"
          ]
        },
        "authMechanismName": {
          "description": "The authentication mechanism used to connect to this host. Possible values are: MONGODB_CR GSSAPI NONE",
          "example": "MONGODB_CR",
          "type": [
            "string"
          ]
        },
        "username": {
          "description": "Username for connecting to this host. Only present when the authMechanismName is MONGODB_CR.",
          "example": "mongo",
          "type": [
            "string"
          ]
        },
        "password": {
          "description": "Password for connecting to this host. If a host’s authMechanismName is MONGODB_CR, then you must include this field when creating the host or updating its credentials. However, it will never be exposed when a host entity is returned.",
          "example": "myM0NGO0!",
          "type": [
            "string"
          ]
        }
      },
      "description": "Working with MMS Hosts",
      "links": [
        {
          "description": "Create a new host.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/hosts",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing host.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/hosts/{(%23%2Fdefinitions%2Fhost%2Fdefinitions%2Fid)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing host.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/hosts/{(%23%2Fdefinitions%2Fhost%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing hosts.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/hosts",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Update an existing host.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/hosts/{(%23%2Fdefinitions%2Fhost%2Fdefinitions%2Fid)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/host/definitions/id"
        },
        "groupId": {
          "$ref": "#/definitions/host/definitions/groupId"
        },
        "hostname": {
          "$ref": "#/definitions/host/definitions/hostname"
        },
        "port": {
          "$ref": "#/definitions/host/definitions/port"
        },
        "lastPing": {
          "$ref": "#/definitions/host/definitions/lastPing"
        },
        "version": {
          "$ref": "#/definitions/host/definitions/version"
        },
        "deactivated": {
          "$ref": "#/definitions/host/definitions/deactivated"
        },
        "hasStartupWarnings": {
          "$ref": "#/definitions/host/definitions/hasStartupWarnings"
        },
        "sslEnabled": {
          "$ref": "#/definitions/host/definitions/sslEnabled"
        },
        "logsEnabled": {
          "$ref": "#/definitions/host/definitions/logsEnabled"
        },
        "lastReactivated": {
          "$ref": "#/definitions/host/definitions/lastReactivated"
        },
        "uptimeMsec": {
          "$ref": "#/definitions/host/definitions/uptimeMsec"
        },
        "lastRestart": {
          "$ref": "#/definitions/host/definitions/lastRestart"
        },
        "shardName": {
          "$ref": "#/definitions/host/definitions/shardName"
        },
        "replicaSetName": {
          "$ref": "#/definitions/host/definitions/replicaSetName"
        },
        "replicaStateName": {
          "$ref": "#/definitions/host/definitions/replicaStateName"
        },
        "created": {
          "$ref": "#/definitions/host/definitions/created"
        },
        "hostEnabled": {
          "$ref": "#/definitions/host/definitions/hostEnabled"
        },
        "journalingEnabled": {
          "$ref": "#/definitions/host/definitions/journalingEnabled"
        },
        "alertsEnabled": {
          "$ref": "#/definitions/host/definitions/alertsEnabled"
        },
        "muninEnabled": {
          "$ref": "#/definitions/host/definitions/muninEnabled"
        },
        "hidden": {
          "$ref": "#/definitions/host/definitions/hidden"
        },
        "profilerEnabled": {
          "$ref": "#/definitions/host/definitions/profilerEnabled"
        },
        "lowUlimit": {
          "$ref": "#/definitions/host/definitions/lowUlimit"
        },
        "muninPort": {
          "$ref": "#/definitions/host/definitions/muninPort"
        },
        "authMechanismName": {
          "$ref": "#/definitions/host/definitions/authMechanismName"
        },
        "username": {
          "$ref": "#/definitions/host/definitions/username"
        },
        "password": {
          "$ref": "#/definitions/host/definitions/password"
        }
      },
      "type": [
        "object"
      ]
    },
    "root": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Root",
      "definitions": {
        "throttling": {
          "description": "Tells whether or not MMS is throttling data. This can be used as a simple indicator of the current health of MMS, since throttling is generally enabled when MMS is in an unhealthy state.",
          "example": "false",
          "type": [
            "boolean"
          ]
        }
      },
      "description": "MMS API Information",
      "links": [
        {
          "description": "Info for existing root.",
          "href": "",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        }
      ],
      "properties": {
        "throttling": {
          "$ref": "#/definitions/root/definitions/throttling"
        }
      },
      "type": [
        "object"
      ]
    },
    "user": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "User",
      "definitions": {
        "id": {
          "description": "Unique identifier",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "username": {
          "description": "MMS username",
          "example": "jane.doe@mongodb.com",
          "type": [
            "string"
          ]
        },
        "password": {
          "description": "Password. This field is NOT included in the entity returned from the server. It can only be sent in the entity body when creating a new user.",
          "example": "abc123",
          "type": [
            "string"
          ]
        },
        "emailAddress": {
          "description": "Email address",
          "example": "somebody@somewhere-else.com",
          "type": [
            "string"
          ]
        },
        "mobileNumber": {
          "description": "Mobile number. This field can only be set or edited using the MMS UI because it is tied to two factor authentication",
          "example": "555-555-5555",
          "type": [
            "string"
          ]
        },
        "firstName": {
          "description": "First name",
          "example": "Jane",
          "type": [
            "string"
          ]
        },
        "lastName": {
          "description": "Last name",
          "example": "Doe",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "The groupId in which the user has the specified role. Note that for the 'global' roles (those whose name starts with GLOBAL_) there is no groupId since these roles are not tied to a group.",
          "example": "533daa30879bb2da07807696",
          "type": [
            "string"
          ]
        },
        "roleName": {
          "description": "The name of the role. Possible values are: GLOBAL_AUTOMATION_ADMIN GLOBAL_BACKUP_ADMIN GLOBAL_MONITORING_ADMIN GLOBAL_OWNER GLOBAL_READ_ONLY GLOBAL_USER_ADMIN GROUP_AUTOMATION_ADMIN GROUP_BACKUP_ADMIN GROUP_MONITORING_ADMIN GROUP_OWNER GROUP_READ_ONLY GROUP_USER_ADMIN",
          "example": "GROUP_USER_ADMIN",
          "type": [
            "string"
          ]
        }
      },
      "description": "Working with MMS Users",
      "links": [
        {
          "description": "Create a new user.",
          "href": "/users",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Add a user to an existing group.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/users",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
            },
            "type": [
              "array"
            ]
          },
          "title": "Add"
        },
        {
          "description": "Info for existing user.",
          "href": "/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing users.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/users",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        },
        {
          "description": "Delete an existing user.",
          "href": "/groups/{(%23%2Fdefinitions%2Fgroup%2Fdefinitions%2Fid)}/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}",
          "method": "DELETE",
          "rel": "instances",
          "title": "Delete"
        },
        {
          "description": "Update an existing user.",
          "href": "/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}",
          "method": "PATCH",
          "rel": "update",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Update"
        }
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/user/definitions/id"
        },
        "username": {
          "$ref": "#/definitions/user/definitions/username"
        },
        "password": {
          "$ref": "#/definitions/user/definitions/password"
        },
        "emailAddress": {
          "$ref": "#/definitions/user/definitions/emailAddress"
        },
        "mobileNumber": {
          "$ref": "#/definitions/user/definitions/mobileNumber"
        },
        "firstName": {
          "$ref": "#/definitions/user/definitions/firstName"
        },
        "lastName": {
          "$ref": "#/definitions/user/definitions/lastName"
        },
        "roles": {
          "description": "Role assignments",
          "properties": {
            "groupId": {
              "$ref": "#/definitions/user/definitions/groupId"
            },
            "roleName": {
              "$ref": "#/definitions/user/definitions/roleName"
            }
          },
          "strictProperties": true,
          "type": [
            "object"
          ]
        }
      },
      "type": [
        "object"
      ]
    },
    "whitelist": {
      "$schema": "http://json-schema.org/draft-04/hyper-schema",
      "title": "Whitelist",
      "definitions": {
        "id": {
          "description": "Unique identifier",
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "ipAddress": {
          "description": "A whitelisted IP address.",
          "example": "12.34.56.78",
          "type": [
            "string"
          ]
        },
        "created": {
          "description": "The date this IP address was added to the whitelist.",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "lastUsed": {
          "description": "The date of the most recent request that originated from this IP address. Note that this field is only updated when a resource that is protected by the whitelist is accessed.",
          "example": "2012-01-01T12:00:00Z",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "count": {
          "description": "The total number of requests that originated from this IP address. Note that this field is only updated when a resource that is protected by the whitelist is accessed.",
          "example": "1",
          "type": [
            "integer"
          ]
        }
      },
      "description": "Working with MMS Whitelists",
      "links": [
        {
          "description": "Create a new whitelist.",
          "href": "/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}/whitelist",
          "method": "POST",
          "rel": "create",
          "schema": {
            "properties": {
            },
            "type": [
              "object"
            ]
          },
          "title": "Create"
        },
        {
          "description": "Delete an existing whitelist.",
          "href": "/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}/whitelist/{(%23%2Fdefinitions%2Fwhitelist%2Fdefinitions%2Fid)}",
          "method": "DELETE",
          "rel": "destroy",
          "title": "Delete"
        },
        {
          "description": "Info for existing whitelist.",
          "href": "/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}/whitelist/{(%23%2Fdefinitions%2Fwhitelist%2Fdefinitions%2Fid)}",
          "method": "GET",
          "rel": "self",
          "title": "Info"
        },
        {
          "description": "List existing whitelists.",
          "href": "/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fid)}/whitelist",
          "method": "GET",
          "rel": "instances",
          "title": "List"
        }
      ],
      "properties": {
        "ipAddress": {
          "$ref": "#/definitions/whitelist/definitions/ipAddress"
        },
        "created": {
          "$ref": "#/definitions/whitelist/definitions/created"
        },
        "lastUsed": {
          "$ref": "#/definitions/whitelist/definitions/lastUsed"
        },
        "count": {
          "$ref": "#/definitions/whitelist/definitions/count"
        }
      },
      "type": [
        "object"
      ]
    }
  },
  "properties": {
    "alert": {
      "$ref": "#/definitions/alert"
    },
    "alertConfig": {
      "$ref": "#/definitions/alertConfig"
    },
    "backupConfig": {
      "$ref": "#/definitions/backupConfig"
    },
    "cluster": {
      "$ref": "#/definitions/cluster"
    },
    "group": {
      "$ref": "#/definitions/group"
    },
    "host": {
      "$ref": "#/definitions/host"
    },
    "root": {
      "$ref": "#/definitions/root"
    },
    "user": {
      "$ref": "#/definitions/user"
    },
    "whitelist": {
      "$ref": "#/definitions/whitelist"
    }
  },
  "type": [
    "object"
  ],
  "description": "MMS Public API Description",
  "id": "http://leafygreen.github.io/mms-api-schema/schemas/v1.0#",
  "links": [
    {
      "href": "https://mms.mongodb.com/api/public/v1.0",
      "rel": "self"
    }
  ],
  "title": "MMS Public API v1.0"
};
