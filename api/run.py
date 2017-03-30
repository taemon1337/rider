from eve import Eve
from os import getenv

MONGO_HOST = getenv("MONGO_HOST","mongo")
MONGO_PORT = int(getenv("MONGO_PORT", "27017"))
MONGO_DBNAME = getenv("MONGO_DBNAME","riderdb")

event_schema = {
  'title': {
    'type': 'string',
    'required': True
  },
  'subtitle': {
    'type': 'string',
    'default': ''
  },
  'description': {
    'type': 'string',
    'default': ''
  },
  'location': {
    'type': 'string',
    'default': ''
  },
  'date': {
    'type': 'string',
    'default': ''
  },
  'time': {
    'type': 'string',
    'default': ''
  }
}

class_schema = {
  'uid': {
    'type': 'string',
    'required': True
  },
  'title': {
    'type': 'string',
    'required': True
  },
  'details': {
    'type': 'string',
    'default': ''
  },
}

rider_schema = {
  'name': {
    'type': 'string',
    'required': True
  },
  'email': {
    'type': 'string',
    'required': True
  },
  'birthyear': {
    'type': 'number',
    'required': True
  }
}

horse_schema = {
  'name': {
    'type': 'string',
    'required': True
  },
  'owner': {
    'type': 'string',
    'required': True
  },
  'details': {
    'type': 'string',
    'required': True
  }
}

entry_schema = {
  'event': {
    'type': 'objectid',
    'data_relation': {
      'resource': 'events',
      'field': '_id',
      'embeddable': True
    }
  },
  'rider': {
    'required': True,
    'type': 'objectid',
    'data_relation': {
      'resource': 'riders',
      'field': '_id',
      'embeddable': True
    }
  },
  'horse': {
    'required': True,
    'type': 'objectid',
    'data_relation': {
      'resource': 'horses',
      'field': '_id',
      'embeddable': True
    }
  },
  'class': {
    'required': True,
    'type': 'objectid',
    'data_relation': {
      'resource': 'classes',
      'field': '_id',
      'embeddable': True
    }
  }
}

settings = {
  'URL_PREFIX': 'api',
  'MONGO_HOST': MONGO_HOST,
  'MONGO_PORT': MONGO_PORT,
  'MONGO_DBNAME': MONGO_DBNAME,
  'RESOURCE_METHODS': ['GET','POST'],
  'ITEM_METHODS': ['GET','PUT','PATCH','DELETE'],
#  'MULTIPART_FORM_FIELDS_AS_JSON': True,
  'RETURN_MEDIA_AS_URL': True,
  'RETURN_MEDIA_AS_BASE64_STRING': False,
  'EXTENDED_MEDIA_INFO': ['name','length','content_type'],
  'MEDIA_ENDPOINT': 'raw',
  'XML': False,
  'DATE_FORMAT': '%Y-%m-%d %H:%M:%S',
  'DOMAIN': {
    'events': {
      'schema': event_schema
    },
    'classes': {
      'schema': class_schema
    },
    'riders': {
      'schema': rider_schema
    },
    'horses': {
      'schema': horse_schema
    },
    'entries': {
      'schema': entry_schema
    }
  }
}

app = Eve(settings=settings)

if __name__ == "__main__":
  host = getenv("HOST","0.0.0.0")
  port = int(getenv("PORT","8080"))
  debug = getenv("DEBUG",True)
  app.run(host=host, port=port, debug=debug)

