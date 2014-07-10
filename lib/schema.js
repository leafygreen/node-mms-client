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
          "example": "API Example",
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
          "example": "OPEN",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "created": {
          "description": "When the alert was opened.",
          "example": "OPEN",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "updated": {
          "description": "When the alert was last updated.",
          "example": "OPEN",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "resolved": {
          "description": "When the alert was closed. Only present if the status is CLOSED.",
          "example": "OPEN",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "lastNotified": {
          "description": "When the last notification was sent for this alert. Only present if notifications have been sent.",
          "example": "OPEN",
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
        "number": {
          "description": "The value of the metric.",
          "example": "100.0",
          "type": [
            "number"
          ]
        },
        "units": {
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
              "$ref": "#/definitions/alert/definitions/number"
            },
            "units": {
              "$ref": "#/definitions/alert/definitions/units"
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
          "example": "API Example",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that owns this host.",
          "example": "API Example",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "statusName": {
          "description": "The current (or desired) status of the backup configuration. Possible values are: INACTIVE PROVISIONING STARTED STOPPED TERMINATING",
          "example": "INACTIVE",
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
          "example": "SECONDARY",
          "type": [
            "boolean"
          ]
        },
        "syncSource": {
          "description": "The database to use to get data to be backed up. Possible values are either a specific hostname or one of: PRIMARY SECONDARY. This field is only used when updating a backup configuration. It is not returned by a GET request.",
          "example": "true",
          "type": [
            "string"
          ]
        },
        "excludedNamespaces": {
          "description": "A list of database names and/or collection names that should not be backed up. A string without a dot is assumed to be a database name; a string with a dot is assumed to mean dbName.collectionName.",
          "example": "true",
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
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "typeName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "clusterName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "shardName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "replicaSetName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "lastHeartbeat": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
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
          "example": "API Example",
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
          "example": "5196d3628d022db4cbc26d9e",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "groupId": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "format": "uuid",
          "type": [
            "string"
          ]
        },
        "hostname": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "port": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "integer"
          ]
        },
        "typeName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "lastPing": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "ipAddress": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "version": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "deactivated": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "hasStartupWarnings": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "sslEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "logsEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "lastReactivated": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "uptimeMsec": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "number"
          ]
        },
        "lastRestart": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "shardName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "replicaSetName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "replicaStateName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "created": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "format": "date-time",
          "type": [
            "string"
          ]
        },
        "hostEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "journalingEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "alertsEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "muninEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "hidden": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "profilerEnabled": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "lowUlimit": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "boolean"
          ]
        },
        "muninPort": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "integer"
          ]
        },
        "authMechanismName": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "username": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
          "type": [
            "string"
          ]
        },
        "password": {
          "description": "ID of the group that this alert was opened for.",
          "example": "API Example",
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
          "type": [
            "string"
          ]
        },
        "emailAddress": {
          "description": "Email address",
          "example": "jane.doe@gmail.com",
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
    }
  },
  "properties": {
    "alert": {
      "$ref": "#/definitions/alert"
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
    "user": {
      "$ref": "#/definitions/user"
    }
  },
  "type": [
    "object"
  ],
  "description": "MMS Public API Description",
  "id": "http://api.mms.com/schema#",
  "links": [
    {
      "href": "https://mms.mongodb.com/api/public/v1.0",
      "rel": "self"
    }
  ],
  "title": "MMS Public API"
};
