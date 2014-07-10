module.exports = {
  "$schema": "http://json-schema.org/draft-04/hyper-schema",
  "definitions": {
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
          "description": "Date that a ping was last received from one of the group’s monitoring agents.",
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
    }
  },
  "properties": {
    "group": {
      "$ref": "#/definitions/group"
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
