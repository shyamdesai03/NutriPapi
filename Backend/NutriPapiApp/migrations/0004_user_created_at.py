# Generated by Django 4.0.10 on 2024-03-30 03:03

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('NutriPapiApp', '0003_user_goals_alter_user_weekly_physical_activity'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Created At'),
            preserve_default=False,
        ),
    ]
