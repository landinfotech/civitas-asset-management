__author__ = 'Irwan Fathurrahman <meomancer@gmail.com>'
__date__ = '19/08/20'

from django.conf.urls import url, include
from amlit.api import (
    GetBoxGeojson,
    GetSystem, GetSystems)
from amlit.view.report import ReportPageView

API = [
    # API
    url(r'^system/(?P<id>\d+)',
        GetSystem.as_view(),
        name='api-system'),
    url(r'^system',
        GetSystems.as_view(),
        name='api-systems'),
    url(r'^box/(?P<id>\d+)',
        GetBoxGeojson.as_view(),
        name='api-box')
]

urlpatterns = [
    url(r'^api/', include(API)),
    url(r'^report$', ReportPageView.as_view(), name='amlit-report')
]
