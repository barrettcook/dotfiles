Vim�UnDo� �.���t�{�H�O��B.��AG�8֊xP�g3  W           self.assertError(   �                          U�x    _�                     �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��    �   �   �  V      H        self.assertIn(FIELD_INVALID, response.json['error_description'])5�_�                   �   D    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      D        response = self._search_events(**{'location.within': '5mi'})5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��    �   �   �  W              self.assertError(5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�s     �   �   �  W      8        self.assertError(ARGUMENTS_ERROR, response, 400)5�_�                    �   2    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�v     �   �   �  W      B        self.assertError(response, ARGUMENTS_ERROR, response, 400)5�_�                     �   2    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�w    �   �   �  W      @        self.assertError(response, ARGUMENTS_ERRORresponse, 400)5�_�                  �   G    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      W        self.assertIn(FIELD_INVALID, response.json['error_description'], FIELD_INVALID)5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      J        self.assertIn(, response.json['error_description'], FIELD_INVALID)5�_�      	              �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      I        self.assertIn( response.json['error_description'], FIELD_INVALID)5�_�      
           	   �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��    �   �   �  V      H        self.assertIn(response.json['error_description'], FIELD_INVALID)5�_�   	              
   �   G    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��    �   �   �  V      M        self.assertIn(response.json['error_description'], FIELD_INVALID, 400)5�_�   
                 �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�     �   �   �  V      L        self.asserIn(response.json['error_description'], FIELD_INVALID, 400)5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�     �   �   �  V      K        self.assern(response.json['error_description'], FIELD_INVALID, 400)5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�     �   �   �  V      J        self.asser(response.json['error_description'], FIELD_INVALID, 400)5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U�     �   �   �  V      P        self.assertError(response.json['error_description'], FIELD_INVALID, 400)5�_�                     �   !    ����                                                                                                                                                                                                                                                                                                                            �   /       �   /       V   3    U�
    �   �   �  V      6        self.assertError(response, FIELD_INVALID, 400)5�_�                   �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      ;        self.assertIn(, response.json['error_description'])5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      :        self.assertIn( response.json['error_description'])5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      9        self.assertIn(response.json['error_description'])5�_�                     �   8    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U��     �   �   �  V      >        self.assertIn(response.json['error_description'], RES)5��