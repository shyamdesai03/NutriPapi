# Generated by Django 4.0.10 on 2024-03-30 02:24

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NutriPapiApp', '0002_user_birthday'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='goals',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Goals'),
        ),
        migrations.AlterField(
            model_name='user',
            name='weekly_physical_activity',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)], verbose_name='Weekly Physical Activity in hours'),
        ),
    ]
