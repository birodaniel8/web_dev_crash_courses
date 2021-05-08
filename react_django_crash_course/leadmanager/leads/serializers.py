from rest_framework import serializers
from leads.models import Lead

# Load Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"