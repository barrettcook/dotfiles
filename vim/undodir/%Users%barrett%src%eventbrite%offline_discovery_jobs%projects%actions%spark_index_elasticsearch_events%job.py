Vim�UnDo� Z���Ű�p��r�Z��f�I`\
�r4e�7ю   �           M                       VC�)    _�                    8   I    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA"�     �   7   :   �      I        'available_tickets': _cast_with_none(int, row.available_tickets),5�_�                    9   M    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA"�    �   8   :   �      M        'related_events__event_groups': str(row.related_events__event_groups)5�_�                    9   0    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA$?     �   8   :   �      N        'related_events__event_groups': str(row.related_events__event_groups),5�_�                    9   0    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA$?     �   8   :   �      F        'related_events__event_groups': str(row.events__event_groups),5�_�                    9   0    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA$@     �   8   :   �      E        'related_events__event_groups': str(row.vents__event_groups),5�_�                    9   0    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA$@     �   8   :   �      D        'related_events__event_groups': str(row.ents__event_groups),5�_�      	              9   0    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA$A    �   8   :   �      ?        'related_events__event_groups': str(row._event_groups),5�_�      
           	   9   	    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VBY|     �   8   :   �      >        'related_events__event_groups': str(row.event_groups),5�_�   	              
   9   	    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VBY|     �   8   :   �      6        'events__event_groups': str(row.event_groups),5�_�   
                 9   	    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VBY}     �   8   :   �      /        '_event_groups': str(row.event_groups),5�_�                    9   	    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VBY}     �   8   :   �      .        'event_groups': str(row.event_groups),5�_�                    9   	    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VBY~    �   8   :   �      -        'vent_groups': str(row.event_groups),5�_�                     9        ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VC�(     �               �   	import re   
import ast   
import sys   from collections import Counter       'from elasticsearch import Elasticsearch   !from elasticsearch import helpers       (from pyspark.context import SparkContext   "from pyspark.sql import SQLContext       4from offline_discovery_jobs.settings import settings       INDEX = "discovery_events"   DOCTYPE = "event"    NUM_RELATED_EVENTS_TO_STORE = 25           def _cast_with_none(cast, var):       if var and var != "None":           return cast(var)       return 0           /# TODO: replace this with something more robust   def _clean_html(text):       if not text:           return ""   (    result = text.replace("&nbsp;", " ")   )    return re.sub('<[^<]+?>', '', result)           def _make_dict(row):       return {   Q        'id': _convert_private_event_id_to_public(_cast_with_none(long, row.id)),   )        'name': row.name.decode("utf-8"),   _        'description': _clean_html(row.description.decode("utf-8")) if row.description else "",   *        'start_date': str(row.start_date),   &        'end_date': str(row.end_date),   7        'category': _cast_with_none(int, row.category),   >        'subcategory': _cast_with_none(int, row.sub_category),   6        'format': _cast_with_none(int, row.format_id),           'location': {   8            "lat": _cast_with_none(float, row.latitude),   8            "lon": _cast_with_none(float, row.longitude)   
        },   "        'locale': str(row.locale),   9        'organizer': _cast_with_none(int, row.organizer),           'tags': str(row.tags),   2        'current_status': str(row.current_status),   $        'is_paid': str(row.is_paid),   $        'country': str(row.country),   @        'has_tickets_available': str(row.has_tickets_available),   K        'total_ticket_count': _cast_with_none(int, row.total_ticket_count),   I        'sold_ticket_count': _cast_with_none(int, row.sold_ticket_count),   I        'available_tickets': _cast_with_none(int, row.available_tickets),   .        'event_groups': str(row.event_groups),       }           4def _convert_private_event_id_to_public(private_id):   9    return int(private_id) * settings["EVENT_MULTIPLIER"]           def _get_es_client():       return Elasticsearch(   +        settings["ELASTICSEARCH"]["NODES"],   .        port=settings["ELASTICSEARCH"]["PORT"]       )           def _ensure_index():       client = _get_es_client()       (    if not client.indices.exists(INDEX):           mappings = {               "settings": {   &                "number_of_shards": 1,   '                "number_of_replicas": 2               },               "mappings": {                   DOCTYPE: {   /                    "_all": {"enabled": False},   #                    "properties": {   !                        "name": {   -                            "type": "string",   2                            "analyzer": "english",                           },   (                        "description": {   -                            "type": "string",   2                            "analyzer": "english",                           },   '                        "start_date": {   +                            "type": "date",   ^                            "format": "yyyy-MM-dd HH:mm:ss.S||yyyy-MM-dd||date_optional_time",   :                            "numeric_resolution": "hours",                           },   %                        "location": {   0                            "type": "geo_point",   3                            "geohash_prefix": True,   8                            "geohash_precision": "100m",                           },   2                        "has_tickets_available": {   .                            "type": "boolean",                           },   $                        "is_paid": {   .                            "type": "boolean",                           }                       }                   }               }   	        }       3        client.indices.create(INDEX, body=mappings)           def _get_e2e_from_row_str(row):   (    event_id = int(row[1:row.find(',')])   H    event_score_dict_contents_str = row[row.find("{"):row.find('}') + 1]       V    events_with_scores_cntr = Counter(ast.literal_eval(event_score_dict_contents_str))       7    for e_id, score in events_with_scores_cntr.items():           if score == 1:   -            del events_with_scores_cntr[e_id]            top_related_events_list = []           if events_with_scores_cntr:   _        top_related_events_list = [_convert_private_event_id_to_public(eid) for (eid, score) in   �                                   events_with_scores_cntr.most_common(min(NUM_RELATED_EVENTS_TO_STORE, len(events_with_scores_cntr)))]       Q    return _convert_private_event_id_to_public(event_id), top_related_events_list            def run(spark_context, has_e2e):   +    sql_context = SQLContext(spark_context)       $    es_events_row_rdd = sql_context\   j        .parquetFile(settings["HADOOP_NAME_NODE"] + settings["BASE_HIVE_PATH"] + "/elasticsearch_events")\           .repartition(100)       5    es_event_docs = es_events_row_rdd.map(_make_dict)           if has_e2e:   K        es_event_docs = insert_event_affinity(spark_context, es_event_docs)       :    def _map_event_doc_to_elasticsearch_action(event_doc):           return {               "_index": INDEX,               "_type": "event",   #            "_id": event_doc['id'],                "_source": event_doc   	        }       =    def _save_partition_to_es(elasticsearch_action_iterator):   !        client = _get_es_client()   n        for success, details in helpers.streaming_bulk(client, elasticsearch_action_iterator, chunk_size=500):               if not success:                   yield details           _ensure_index()           es_event_docs \   B        .filter(lambda event_doc: event_doc['name'] is not None) \   6        .map(_map_event_doc_to_elasticsearch_action) \   0        .foreachPartition(_save_partition_to_es)           8def insert_event_affinity(spark_context, es_event_docs):   z    in_file = settings["HADOOP_NAME_NODE"] + settings["BASE_HIVE_PATH"] + "/output/jobs/models/event_click_related_events"           e2e_rdd = spark_context\           .textFile(in_file)\   5        .map(lambda row: _get_e2e_from_row_str(row))\   B        .filter(lambda (event_id, related_events): related_events)       Q    # If both of these use the same partitioner, the join won't require a shuffle   2    es_event_docs = es_event_docs.partitionBy(100)   &    e2e_rdd = e2e_rdd.partitionBy(100)       *    def _add_related_to_doc(doc, related):           if related:   3            doc['related_events__clicks'] = related           return doc       "    es_event_docs = es_event_docs\   +        .map(lambda doc: (doc['id'], doc))\            .leftOuterJoin(e2e_rdd)\           .values()\   F        .map(lambda (doc, related): _add_related_to_doc(doc, related))           return es_event_docs           if __name__ == "__main__":   A    sc = SparkContext(appName="spark_index_elasticsearch_events")   2    if len(sys.argv) > 1 and sys.argv[1] == 'e2e':           run(sc, True)   	    else:           run(sc, False)5�_�                     8   I    ����                                                                                                                                                                                                                                                                                                                            �   _       �   x       v   x    VA"�     �   7   9   �      I        'available_tickets': _cast_with_none(int, row.available_tickets),           'related_5��