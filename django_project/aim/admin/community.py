__author__ = 'Irwan Fathurrahman <meomancer@gmail.com>'
__date__ = '14/08/20'

from django.contrib import admin
from aim.models.community import (
    Community, Province, Region
)


class CommunityAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'region', 'province')

    def province(self, obj):
        """ Return region
        :param obj:
        :type obj: Community
        :return:
        """
        return obj.region.province


class RegionAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'province')


class ProvinceAdmin(admin.ModelAdmin):
    list_display = ('code', 'name')


admin.site.register(Province, ProvinceAdmin)
admin.site.register(Region, RegionAdmin)
admin.site.register(Community, CommunityAdmin)
