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
          "description": "The groupId in which the user has the specified role. Note that for the “global” roles (those whose name starts with GLOBAL_) there is no groupId since these roles are not tied to a group.",
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
    "group": {
      "$ref": "#/definitions/group"
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
