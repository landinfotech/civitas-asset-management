__author__ = 'Irwan Fathurrahman <meomancer@gmail.com>'
__date__ = '14/08/20'

from django.contrib.gis.db import models
from amlit.models.base import _Term
from amlit.models.water_supply.general import WaterGeneralBrand
from amlit.models.water_supply.base import WaterSupplyFeature


class TankType(_Term):
    """ List of tank type."""

    class Meta:
        db_table = 'tank_type'


class Tank(WaterSupplyFeature):
    """
    WaterSupply (PWS) sub-feature : Tank
    """
    geometry = models.PolygonField(
        help_text="Geometry of tank."
    )
    type = models.ForeignKey(
        TankType,
        on_delete=models.CASCADE
    )
    brand = models.ForeignKey(
        WaterGeneralBrand,
        on_delete=models.CASCADE
    )
    model = models.CharField(
        max_length=256,
        help_text='Model of tank'
    )
    capacity = models.FloatField(
        null=True, blank=True,
        help_text='Capacity of tank (SI system)'
    )

    class Meta:
        db_table = 'tank'
