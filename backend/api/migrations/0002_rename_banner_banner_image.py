# Generated by Django 4.0.1 on 2024-09-27 18:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='banner',
            old_name='banner',
            new_name='image',
        ),
    ]
